const mongoose = require("mongoose");

const attributeValueSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  attribute: {
    type: mongoose.Types.ObjectId,
    ref: "attribute",
    required: true,
  },
  status: { type: Boolean, default: false },
});

module.exports = mongoose.model("attribute_value", attributeValueSchema);
