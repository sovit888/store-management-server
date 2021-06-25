const mongoose = require("mongoose");
const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  brand: { type: String, required: true },
  category: { type: String, required: true },
  store: { type: String, required: true },
  image: { type: String, default: null },
  attribute: { type: Object },
  description: { type: String, default: null },
  availability: { type: Boolean, default: false },
});

module.exports = mongoose.model("product", productSchema);
