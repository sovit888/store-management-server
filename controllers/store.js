const StoreModel = require("../models/Store");
const mongoose = require("mongoose");

exports.getStore = (req, res) => {
  StoreModel.find()
    .then((stores) => {
      return res.json({ stores });
    })
    .catch((error) => {
      return res.status(422).json({ error: "bad requests" });
    });
};

exports.insertStore = (req, res) => {
  const newStore = new StoreModel(req.body);
  newStore.save((error, store) => {
    if (error) {
      return res.status(400).json({ error: "Name already exists" });
    }
    return res.json({ store });
  });
};

exports.updateStore = (req, res) => {
  const { _id, ...body } = req.body;
  if (!mongoose.Types.ObjectId.isValid(_id)) {
    return res.status(422).json({ error: "cannot find store" });
  }
  StoreModel.findByIdAndUpdate(_id, { $set: body }, { new: true })
    .then((store) => {
      return res.json({ store });
    })
    .catch((error) => {
      res.status(422).json({ error: "Cannot update data" });
    });
};

exports.removeStore = (req, res) => {
  if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
    return res.status(422).json({ error: "cannot find store" });
  }
  StoreModel.findByIdAndDelete(req.params.id)
    .then((store) => {
      return res.json({ store });
    })
    .catch((error) => {
      return res.status(422).json({ error: "cannot remove store" });
    });
};
