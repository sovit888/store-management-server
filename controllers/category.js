const CategoryModel = require("../models/Category");
const mongoose = require("mongoose");

exports.getCategory = (req, res) => {
  CategoryModel.find()
    .then((categories) => {
      return res.json({ categories });
    })
    .catch((error) => {
      return res.status(422).json({ error: "bad requests" });
    });
};

exports.insertCategory = (req, res) => {
  const newCategory = new CategoryModel(req.body);
  newCategory.save((error, category) => {
    if (error) {
      return res.status(400).json({ error: "Name already exists" });
    }
    return res.json({ category });
  });
};

exports.updateCategory = (req, res) => {
  const { _id, ...body } = req.body;
  if (!mongoose.Types.ObjectId.isValid(_id)) {
    return res.status(422).json({ error: "cannot find category" });
  }
  CategoryModel.findByIdAndUpdate(_id, { $set: body }, { new: true })
    .then((category) => {
      return res.json({ category });
    })
    .catch((error) => {
      res.status(422).json({ error: "Cannot update category" });
    });
};

exports.removeCategory = (req, res) => {
  if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
    return res.status(422).json({ error: "cannot find category" });
  }
  CategoryModel.findByIdAndDelete(req.params.id)
    .then((category) => {
      return res.json({ category });
    })
    .catch((error) => {
      return res.status(422).json({ error: "cannot remove category" });
    });
};
