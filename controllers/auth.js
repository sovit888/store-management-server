const jwt = require("jsonwebtoken");
const UserModel = require("../models/User");

exports.loginUser = (req, res) => {
  const { email, password } = req.body;
  UserModel.findOne({ email }, (error, user) => {
    if (error || !user) {
      return res.status(400).json({ error: "cannot get user" });
    }
    if (!user.authenticate(password)) {
      return res.status(400).json({ error: "invalid credentials" });
    }
    const token = jwt.sign({ _id: user._id }, process.env.ACCESS_JWT_SECRET);
    return res.json({ token });
  });
};

exports.signupUser = (req, res) => {
  const newUser = new UserModel(req.body);
  newUser.save((error, user) => {
    if (error) {
      return res.status(400).json({ error: "cannot insert user" });
    }
    return res.json({ message: "new user inserted" });
  });
};

exports.getProfile = (req, res) => {
  return res.json(req.user);
};
