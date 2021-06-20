module.exports = (type) => (req, res, next) => {
  let group = req.user.group.name.toLowerCase();
  let status = req.user.group[type];
  if (group !== "admin" && !status) {
    return res.status(401).json({ error: "Forbidden" });
  }
  next();
};
