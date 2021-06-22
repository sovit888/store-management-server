const UserModel = require("../models/User");
const mongoose = require("mongoose");

exports.getUsers = (req, res) => {
  UserModel.find()
    .select(["-enc_password", "-salt"])
    .populate("group", "_id name")
    .then((users) => {
      return res.json({ users });
    })
    .catch((error) => {
      return res.status(401).json({ error: "cannot find users" });
    });
};
exports.updateUserGroup = (req, res) => {
  const { _id, group } = req.body;
  UserModel.findByIdAndUpdate(_id, { $set: { group } }, { new: true })
    .then((user) => {
      return res.json({ user });
    })
    .catch((error) => {
      return res.status(401).json({ error: "cannot update user" });
    });
};

exports.removeUser = (req, res) => {
  if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
    return res.status(422).json({ error: "cannot find users" });
  }
  UserModel.findByIdAndDelete(req.params.id)
    .then((user) => {
      return res.json({ user });
    })
    .catch((error) => {
      return res.status(422).json({ error: "cannot remove users" });
    });
};
