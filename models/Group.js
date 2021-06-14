const mongoose = require("mongoose");

const groupSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  attribute: { type: Boolean, default: false },
  brand: { type: Boolean, default: false },
  category: { type: Boolean, default: false },
  product: { type: Boolean, default: false },
  order: { type: Boolean, default: false },
  store: { type: Boolean, default: false },
});

module.exports = mongoose.model("group", groupSchema);
