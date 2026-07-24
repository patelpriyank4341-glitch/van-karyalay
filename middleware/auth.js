const jwt = require("jsonwebtoken");

function requireAuth(req, res, next) {
  const header = req.headers.authorization || "";
  const token = header.startsWith("Bearer ") ? header.slice(7) : null;
  if (!token) return res.status(401).json({ error: "લોગિન જરૂરી છે." });
  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET);
    req.user = payload; // { id, role, name }
    next();
  } catch {
    return res.status(401).json({ error: "સેશન સમાપ્ત થયું છે, ફરી લોગિન કરો." });
  }
}

function requireAdmin(req, res, next) {
  if (req.user?.role !== "admin") {
    return res.status(403).json({ error: "ફક્ત Admin માટે." });
  }
  next();
}

module.exports = { requireAuth, requireAdmin };
