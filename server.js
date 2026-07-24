require("dotenv").config();
const express = require("express");
const cors = require("cors");
const path = require("path");
const { initDb } = require("./db");

const authRoutes = require("./routes/auth");
const employeeRoutes = require("./routes/employees");
const taskRoutes = require("./routes/tasks");

const app = express();
app.use(cors());
app.use(express.json({ limit: "2mb" }));

app.use("/api/auth", authRoutes);
app.use("/api/employees", employeeRoutes);
app.use("/api/tasks", taskRoutes);

// serves the frontend (public/index.html, app.js, style.css) and uploaded files (public/uploads/...)
app.use(express.static(path.join(__dirname, "public")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

const PORT = process.env.PORT || 4000;

initDb()
  .then(() => {
    app.listen(PORT, () => console.log(`વન કાર્ય ટ્રેકર સર્વર ચાલુ છે — port ${PORT}`));
  })
  .catch((err) => {
    console.error("Database શરૂ કરવામાં ભૂલ:", err);
    process.exit(1);
  });
