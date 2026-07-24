const { Pool } = require("pg");
const bcrypt = require("bcryptjs");

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: process.env.DATABASE_URL && process.env.DATABASE_URL.includes("localhost")
    ? false
    : { rejectUnauthorized: false },
});

const SCHEMA = `
CREATE TABLE IF NOT EXISTS users (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  username TEXT UNIQUE NOT NULL,
  password_hash TEXT NOT NULL,
  role TEXT NOT NULL CHECK (role IN ('admin','employee')),
  active BOOLEAN NOT NULL DEFAULT TRUE,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE TABLE IF NOT EXISTS tasks (
  id SERIAL PRIMARY KEY,
  title TEXT NOT NULL,
  description TEXT DEFAULT '',
  assigned_to INTEGER NOT NULL REFERENCES users(id),
  created_by INTEGER REFERENCES users(id),
  assigned_date DATE NOT NULL DEFAULT CURRENT_DATE,
  due_date DATE,
  status TEXT NOT NULL DEFAULT 'pending' CHECK (status IN ('pending','in_progress','completed')),
  completion_date DATE,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE TABLE IF NOT EXISTS task_notes (
  id SERIAL PRIMARY KEY,
  task_id INTEGER NOT NULL REFERENCES tasks(id) ON DELETE CASCADE,
  author_id INTEGER REFERENCES users(id),
  text TEXT NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE TABLE IF NOT EXISTS task_attachments (
  id SERIAL PRIMARY KEY,
  task_id INTEGER NOT NULL REFERENCES tasks(id) ON DELETE CASCADE,
  filename TEXT NOT NULL,
  original_name TEXT NOT NULL,
  mimetype TEXT,
  uploaded_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
`;

async function initDb() {
  await pool.query(SCHEMA);

  const { rows } = await pool.query("SELECT COUNT(*)::int AS c FROM users");
  if (rows[0].c === 0) {
    const adminUser = process.env.ADMIN_USERNAME || "admin";
    const adminPass = process.env.ADMIN_PASSWORD || "admin123";
    const adminHash = await bcrypt.hash(adminPass, 10);
    await pool.query(
      "INSERT INTO users (name, username, password_hash, role) VALUES ($1,$2,$3,'admin')",
      ["વન અધિકારી (Admin)", adminUser, adminHash]
    );

    const defaultEmployeeHash = await bcrypt.hash("emp123", 10);
    for (let i = 1; i <= 5; i++) {
      await pool.query(
        "INSERT INTO users (name, username, password_hash, role) VALUES ($1,$2,$3,'employee')",
        [`કર્મચારી ${i}`, `emp${i}`, defaultEmployeeHash]
      );
    }
    console.log("Seeded default admin + 5 employee accounts. CHANGE THESE PASSWORDS.");
  }
}

module.exports = { pool, initDb };
