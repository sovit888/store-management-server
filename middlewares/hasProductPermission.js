module.exports = (type) => (req, res, next) => {
  let status = req.user.group[type];
  if (!status && !req.user.group.products) {
    return res.status(401).json({ error: "Forbidden" });
  }
  next();
};
