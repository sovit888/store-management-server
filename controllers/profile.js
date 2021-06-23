const UserModel = require("../models/User");

exports.getProfile = (req, res) => {
  return res.json(req.user);
};

exports.updateProfile = (req, res) => {
  UserModel.findByIdAndUpdate(req.user._id, { $set: req.body }, { new: true })
    .select(["-salt", "-enc_password"])
    .populate("group")
    .then((user) => {
      return res.json(user);
    })
    .catch((error) => {
      return res.status(400).json({ error: "cannt update error" });
    });
};
