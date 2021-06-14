const mongoose = require("mongoose");
const storeSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  status: { type: Boolean, default: false },
});

module.exports = mongoose.model("store", storeSchema);
