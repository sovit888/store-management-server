const mongoose = require("mongoose");

const groupSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  attributes: { type: Boolean, default: false },
  brands: { type: Boolean, default: false },
  categorys: { type: Boolean, default: false },
  products: { type: Boolean, default: false },
  orders: { type: Boolean, default: false },
  stores: { type: Boolean, default: false },
});

module.exports = mongoose.model("group", groupSchema);
