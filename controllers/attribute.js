const AttributeModel = require("../models/Attribute");
const mongoose = require("mongoose");

exports.getAttribute = (req, res) => {
  AttributeModel.find()
    .then((attributes) => {
      return res.json({ attributes });
    })
    .catch((error) => {
      return res.status(422).json({ error: "bad requests" });
    });
};

exports.insertAttribute = (req, res) => {
  const newAttribute = new AttributeModel(req.body);
  newAttribute.save((error, attribute) => {
    if (error) {
      return res.status(400).json({ error: "Name already exists" });
    }
    return res.json({ attribute });
  });
};

exports.updateAttribute = (req, res) => {
  const { _id, ...body } = req.body;
  if (!mongoose.Types.ObjectId.isValid(_id)) {
    return res.status(422).json({ error: "cannot find attribute" });
  }
  AttributeModel.findByIdAndUpdate(_id, { $set: body }, { new: true })
    .then((attribute) => {
      return res.json({ attribute });
    })
    .catch((error) => {
      res.status(422).json({ error: "Cannot update attribute" });
    });
};

exports.removeAttribute = (req, res) => {
  if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
    return res.status(422).json({ error: "cannot find attribute" });
  }
  AttributeModel.findByIdAndDelete(req.params.id)
    .then((attribute) => {
      return res.json({ attribute });
    })
    .catch((error) => {
      return res.status(422).json({ error: "cannot remove attribute" });
    });
};
