const mongoose = require("mongoose");
const brandSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  status: { type: Boolean, default: false },
});

module.exports = mongoose.model("brand", brandSchema);
