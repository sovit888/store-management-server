module.exports = (req, res, next) => {
  let group = req.user.group.name;
  if (!group.toLowerCase() === "admin") {
    return res.status(402).json({ error: "Forbidden Not Admi" });
  }
  next();
};
