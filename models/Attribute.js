const mongoose = require("mongoose");

const attributeSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  values: [{ type: mongoose.Types.ObjectId, ref: "attribute_values" }],
});

exports.AttributeModel = mongoose.model("attribute", attributeSchema);

const attributeValueSchema = new mongoose.Schema({
  name: { type: String, required: true },
});

exports.AttributeValueSchema = mongoose.model(
  "attribute_values",
  attributeValueSchema
);
