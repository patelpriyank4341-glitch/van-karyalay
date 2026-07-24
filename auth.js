const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { pool } = require("../db");
const { requireAuth } = require("../middleware/auth");

const router = express.Router();

router.post("/login", async (req, res) => {
  const { username, password } = req.body || {};
  if (!username || !password) {
    return res.status(400).json({ error: "Username અને password જરૂરી છે." });
  }
  const { rows } = await pool.query(
    "SELECT * FROM users WHERE username = $1 AND active = TRUE",
    [username]
  );
  const user = rows[0];
  if (!user) return res.status(401).json({ error: "Username અથવા password ખોટું છે." });

  const ok = await bcrypt.compare(password, user.password_hash);
  if (!ok) return res.status(401).json({ error: "Username અથવા password ખોટું છે." });

  const token = jwt.sign(
    { id: user.id, role: user.role, name: user.name },
    process.env.JWT_SECRET,
    { expiresIn: "30d" }
  );
  res.json({
    token,
    user: { id: user.id, name: user.name, role: user.role, username: user.username },
  });
});

router.post("/change-password", requireAuth, async (req, res) => {
  const { currentPassword, newPassword } = req.body || {};
  if (!currentPassword || !newPassword || newPassword.length < 4) {
    return res.status(400).json({ error: "હાલનો અને નવો પાસવર્ડ (ઓછામાં ઓછા 4 અક્ષર) જરૂરી છે." });
  }
  const { rows } = await pool.query("SELECT * FROM users WHERE id = $1", [req.user.id]);
  const user = rows[0];
  const ok = await bcrypt.compare(currentPassword, user.password_hash);
  if (!ok) return res.status(401).json({ error: "હાલનો પાસવર્ડ ખોટો છે." });

  const newHash = await bcrypt.hash(newPassword, 10);
  await pool.query("UPDATE users SET password_hash = $1 WHERE id = $2", [newHash, req.user.id]);
  res.json({ ok: true });
});

router.get("/me", requireAuth, (req, res) => {
  res.json({ user: req.user });
});

module.exports = router;
