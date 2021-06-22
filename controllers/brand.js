const BrandModel = require("../models/Brand");
const mongoose = require("mongoose");

exports.getBrand = (req, res) => {
  BrandModel.find()
    .then((brands) => {
      return res.json({ brands });
    })
    .catch((error) => {
      return res.status(422).json({ error: "bad requests" });
    });
};

exports.insertBrand = (req, res) => {
  const newBrand = new BrandModel(req.body);
  newBrand.save((error, brand) => {
    if (error) {
      return res.status(400).json({ error: "Name already exists" });
    }
    return res.json({ brand });
  });
};

exports.updateBrand = (req, res) => {
  const { _id, ...body } = req.body;
  if (!mongoose.Types.ObjectId.isValid(_id)) {
    return res.status(422).json({ error: "cannot find brand" });
  }
  BrandModel.findByIdAndUpdate(_id, { $set: body }, { new: true })
    .then((brand) => {
      return res.json({ brand });
    })
    .catch((error) => {
      res.status(422).json({ error: "Cannot update brand" });
    });
};

exports.removeBrand = (req, res) => {
  if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
    return res.status(422).json({ error: "cannot find brand" });
  }
  BrandModel.findByIdAndDelete(req.params.id)
    .then((brand) => {
      return res.json({ brand });
    })
    .catch((error) => {
      return res.status(422).json({ error: "cannot remove brand" });
    });
};
