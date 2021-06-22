const jwt = require("jsonwebtoken");
const User = require("../models/User");

module.exports = (req, res, next) => {
  let { authorization } = req.headers;
  if (!authorization) {
    return res.status(402).json({ error: "You must Logged in" });
  }
  let token = authorization.replace("Bearer ", "");
  jwt.verify(token, process.env.ACCESS_JWT_SECRET, (error, payload) => {
    if (error) {
      return res.status(400).json({ error: "Unauthorized" });
    }
    User.findById(payload._id)
      .select(["-enc_password", "-salt"])
      .populate("group")
      .then((user) => {
        req.user = user;
        next();
      })
      .catch((error) => {
        return res.status(400).json({ error: "Unauthorized" });
      });
  });
};
