const UserModel = require("../models/User");

exports.updatePassword = (req, res) => {
  UserModel.findById(req.user._id)
    .then((user) => {
      user.changePassword(req.body.password);
      return res.json({ message: "updated password" });
    })
    .catch((error) => {
      return res.status(422).json({ error: "cannot update password" });
    });
};
