const AttributeValueModel = require("../models/AttributeValue");
const mongoose = require("mongoose");

exports.getAttributeValues = async (req, res) => {
  const attribute = req.params.attributeId;
  if (!mongoose.Types.ObjectId.isValid(attribute)) {
    return res.status(422).json({ error: "cannot get attributes" });
  }
  try {
    const attributeValues = await AttributeValueModel.find().where({
      attribute: { $eq: attribute },
    });
    return res.json({ attributeValues });
  } catch (error) {
    return res.status(422).json({ error: "cannot get attributes" });
  }
};

exports.insertAttributeValues = async (req, res) => {
  const attribute = req.params.attributeId;
  if (!mongoose.Types.ObjectId.isValid(attribute)) {
    return res.status(422).json({ error: "cannot get attributes" });
  }
  try {
    const newAttributeValue = new AttributeValueModel(req.body);
    let values = await newAttributeValue.save();
    return res.json({ values });
  } catch (error) {
    console.log(error);
    return res.status(422).json({ error: "cannot insert attributes" });
  }
};

exports.updateAttributeValues = async (req, res) => {
  const { _id, name } = req.body;
  const attribute = req.params.attributeId;
  if (
    !mongoose.Types.ObjectId.isValid(attribute) ||
    !mongoose.Types.ObjectId.isValid(_id)
  ) {
    return res.status(422).json({ error: "cannot get attributes" });
  }
  try {
    let values = await AttributeValueModel.findByIdAndUpdate(
      _id,
      { $set: { name } },
      { new: true }
    );
    return res.json({ values });
  } catch (error) {
    return res.status(422).json({ error: "cannot update attributes" });
  }
};

exports.removeAttributeValues = async (req, res) => {
  const id = req.params.id;
  const attribute = req.params.attributeId;
  if (
    !mongoose.Types.ObjectId.isValid(id) ||
    !mongoose.Types.ObjectId.isValid(attribute)
  ) {
    return res.status(422).json({ error: "cannot get attributes" });
  }
  try {
    let values = await AttributeValueModel.findByIdAndRemove(id);
    return res.json({ values });
  } catch (error) {
    return res.status(422).json({ error: "cannot remove attributes" });
  }
};
