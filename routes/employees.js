const express = require("express");
const bcrypt = require("bcryptjs");
const { pool } = require("../db");
const { requireAuth, requireAdmin } = require("../middleware/auth");

const router = express.Router();

// List all employees (admin) - also usable by anyone logged in to populate the login dropdown
router.get("/", async (req, res) => {
  const { rows } = await pool.query(
    "SELECT id, name, username, role, active FROM users WHERE role = 'employee' ORDER BY name"
  );
  res.json({ employees: rows });
});

router.post("/", requireAuth, requireAdmin, async (req, res) => {
  const { name, username, password } = req.body || {};
  if (!name || !username || !password) {
    return res.status(400).json({ error: "નામ, username અને password જરૂરી છે." });
  }
  try {
    const hash = await bcrypt.hash(password, 10);
    const { rows } = await pool.query(
      "INSERT INTO users (name, username, password_hash, role) VALUES ($1,$2,$3,'employee') RETURNING id, name, username, role, active",
      [name, username, hash]
    );
    res.json({ employee: rows[0] });
  } catch (e) {
    if (e.code === "23505") return res.status(409).json({ error: "આ username પહેલેથી વપરાયેલ છે." });
    res.status(500).json({ error: "ભૂલ થઈ." });
  }
});

router.put("/:id", requireAuth, requireAdmin, async (req, res) => {
  const { name, username, password, active } = req.body || {};
  const fields = [];
  const values = [];
  let i = 1;
  if (name !== undefined) { fields.push(`name = $${i++}`); values.push(name); }
  if (username !== undefined) { fields.push(`username = $${i++}`); values.push(username); }
  if (active !== undefined) { fields.push(`active = $${i++}`); values.push(active); }
  if (password) {
    const hash = await bcrypt.hash(password, 10);
    fields.push(`password_hash = $${i++}`);
    values.push(hash);
  }
  if (fields.length === 0) return res.status(400).json({ error: "કંઈ બદલવાનું નથી." });
  values.push(req.params.id);
  try {
    const { rows } = await pool.query(
      `UPDATE users SET ${fields.join(", ")} WHERE id = $${i} AND role = 'employee' RETURNING id, name, username, role, active`,
      values
    );
    if (!rows[0]) return res.status(404).json({ error: "કર્મચારી મળ્યો નહીં." });
    res.json({ employee: rows[0] });
  } catch (e) {
    if (e.code === "23505") return res.status(409).json({ error: "આ username પહેલેથી વપરાયેલ છે." });
    res.status(500).json({ error: "ભૂલ થઈ." });
  }
});

module.exports = router;
