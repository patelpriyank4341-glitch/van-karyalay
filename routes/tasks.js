const express = require("express");
const multer = require("multer");
const path = require("path");
const fs = require("fs");
const crypto = require("crypto");
const { pool } = require("../db");
const { requireAuth, requireAdmin } = require("../middleware/auth");

const router = express.Router();

const UPLOAD_DIR = path.join(__dirname, "..", "public", "uploads");
fs.mkdirSync(UPLOAD_DIR, { recursive: true });

const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, UPLOAD_DIR),
  filename: (req, file, cb) => {
    const unique = crypto.randomBytes(8).toString("hex");
    cb(null, `${Date.now()}-${unique}${path.extname(file.originalname)}`);
  },
});
const upload = multer({
  storage,
  limits: { fileSize: 8 * 1024 * 1024 }, // 8MB per file
  fileFilter: (req, file, cb) => {
    const ok = file.mimetype.startsWith("image/") || file.mimetype === "application/pdf";
    cb(ok ? null : new Error("ફક્ત ફોટા અથવા PDF જ અપલોડ કરી શકાય છે."), ok);
  },
});

async function attachExtras(taskRows) {
  if (taskRows.length === 0) return [];
  const ids = taskRows.map((t) => t.id);
  const notesRes = await pool.query(
    `SELECT n.*, u.name AS author_name FROM task_notes n
     LEFT JOIN users u ON u.id = n.author_id
     WHERE n.task_id = ANY($1) ORDER BY n.created_at ASC`,
    [ids]
  );
  const attRes = await pool.query(
    `SELECT * FROM task_attachments WHERE task_id = ANY($1) ORDER BY uploaded_at ASC`,
    [ids]
  );
  return taskRows.map((t) => ({
    ...t,
    notes: notesRes.rows.filter((n) => n.task_id === t.id),
    attachments: attRes.rows.filter((a) => a.task_id === t.id),
  }));
}

// List tasks - admin sees all, employee sees only their own
router.get("/", requireAuth, async (req, res) => {
  let rows;
  if (req.user.role === "admin") {
    const r = await pool.query(
      `SELECT t.*, u.name AS assignee_name FROM tasks t
       JOIN users u ON u.id = t.assigned_to ORDER BY t.assigned_date DESC, t.id DESC`
    );
    rows = r.rows;
  } else {
    const r = await pool.query(
      `SELECT t.*, u.name AS assignee_name FROM tasks t
       JOIN users u ON u.id = t.assigned_to
       WHERE t.assigned_to = $1 ORDER BY t.assigned_date DESC, t.id DESC`,
      [req.user.id]
    );
    rows = r.rows;
  }
  res.json({ tasks: await attachExtras(rows) });
});

// Create task - admin can assign to anyone; an employee can only add work for themself
router.post("/", requireAuth, async (req, res) => {
  const { title, description, dueDate } = req.body || {};
  let { assignedTo } = req.body || {};
  if (req.user.role !== "admin") {
    assignedTo = req.user.id; // employees can only log work under their own name
  }
  if (!title || !assignedTo) return res.status(400).json({ error: "શીર્ષક અને કર્મચારી જરૂરી છે." });
  const { rows } = await pool.query(
    `INSERT INTO tasks (title, description, assigned_to, created_by, due_date)
     VALUES ($1,$2,$3,$4,$5) RETURNING *`,
    [title, description || "", assignedTo, req.user.id, dueDate || null]
  );
  const [full] = await attachExtras(rows);
  res.json({ task: full });
});

async function canAccessTask(req, taskId) {
  const { rows } = await pool.query("SELECT * FROM tasks WHERE id = $1", [taskId]);
  const task = rows[0];
  if (!task) return null;
  if (req.user.role === "admin" || task.assigned_to === req.user.id) return task;
  return false;
}

// Update task status / completion date - admin or the assigned employee
router.patch("/:id/status", requireAuth, async (req, res) => {
  const task = await canAccessTask(req, req.params.id);
  if (task === null) return res.status(404).json({ error: "કાર્ય મળ્યું નહીં." });
  if (task === false) return res.status(403).json({ error: "તમને પરવાનગી નથી." });

  const { status, completionDate } = req.body || {};
  if (!["pending", "in_progress", "completed"].includes(status)) {
    return res.status(400).json({ error: "અયોગ્ય સ્થિતિ." });
  }
  const finalCompletionDate = status === "completed" ? (completionDate || new Date().toISOString().slice(0, 10)) : null;
  const { rows } = await pool.query(
    "UPDATE tasks SET status = $1, completion_date = $2, updated_at = now() WHERE id = $3 RETURNING *",
    [status, finalCompletionDate, req.params.id]
  );
  const [full] = await attachExtras(rows);
  res.json({ task: full });
});

// Delete task - admin only
router.delete("/:id", requireAuth, requireAdmin, async (req, res) => {
  await pool.query("DELETE FROM tasks WHERE id = $1", [req.params.id]);
  res.json({ ok: true });
});

// Add a progress note
router.post("/:id/notes", requireAuth, async (req, res) => {
  const task = await canAccessTask(req, req.params.id);
  if (task === null) return res.status(404).json({ error: "કાર્ય મળ્યું નહીં." });
  if (task === false) return res.status(403).json({ error: "તમને પરવાનગી નથી." });

  const { text } = req.body || {};
  if (!text || !text.trim()) return res.status(400).json({ error: "નોંધ ખાલી ના હોવી જોઈએ." });
  await pool.query(
    "INSERT INTO task_notes (task_id, author_id, text) VALUES ($1,$2,$3)",
    [req.params.id, req.user.id, text.trim()]
  );
  const [full] = await attachExtras([task]);
  res.json({ task: full });
});

// Upload attachment(s)
router.post("/:id/attachments", requireAuth, upload.array("files", 5), async (req, res) => {
  const task = await canAccessTask(req, req.params.id);
  if (task === null) return res.status(404).json({ error: "કાર્ય મળ્યું નહીં." });
  if (task === false) return res.status(403).json({ error: "તમને પરવાનગી નથી." });

  for (const file of req.files || []) {
    await pool.query(
      "INSERT INTO task_attachments (task_id, filename, original_name, mimetype) VALUES ($1,$2,$3,$4)",
      [req.params.id, file.filename, file.originalname, file.mimetype]
    );
  }
  const [full] = await attachExtras([task]);
  res.json({ task: full });
});

// Delete an attachment
router.delete("/:taskId/attachments/:attId", requireAuth, async (req, res) => {
  const task = await canAccessTask(req, req.params.taskId);
  if (task === null) return res.status(404).json({ error: "કાર્ય મળ્યું નહીં." });
  if (task === false) return res.status(403).json({ error: "તમને પરવાનગી નથી." });

  const { rows } = await pool.query(
    "DELETE FROM task_attachments WHERE id = $1 AND task_id = $2 RETURNING *",
    [req.params.attId, req.params.taskId]
  );
  const att = rows[0];
  if (att) {
    const filePath = path.join(UPLOAD_DIR, att.filename);
    fs.unlink(filePath, () => {});
  }
  res.json({ ok: true });
});

module.exports = router;
