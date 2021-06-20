const GroupModel = require("../models/Group");
const mongoose = require("mongoose");

exports.getGroup = (req, res) => {
  GroupModel.find()
    .where({ name: { $ne: "Admin" } })
    .then((groups) => {
      return res.json({ groups });
    })
    .catch((error) => {
      return res.status(422).json({ error: "Cannot get Groups" });
    });
};

exports.insertGroup = (req, res) => {
  const newGroup = new GroupModel(req.body);
  newGroup.save((error, group) => {
    if (error) {
      return res.status(422).json({ error: "Cannot insert new group" });
    }
    return res.json({ group });
  });
};

exports.updateGroup = (req, res) => {
  const { _id, ...body } = req.body;
  if (!mongoose.Types.ObjectId.isValid(_id)) {
    return res.status(422).json({ error: "Cannot update group" });
  }
  GroupModel.findByIdAndUpdate(_id, { $set: body }, { new: true })
    .then((group) => {
      return res.json({ group });
    })
    .catch((error) => {
      return res.status(422).json({ error: "Cannot update group" });
    });
};

exports.removeGroup = (req, res) => {
  if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
    return res.status(422).json({ error: "Cannot delete group" });
  }
  GroupModel.findByIdAndDelete(req.params.id)
    .then((group) => {
      return res.json({ group });
    })
    .catch((error) => {
      return res.status(422).json({ error: "Cannot delete group" });
    });
};
