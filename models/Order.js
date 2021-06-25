const mongoose = require("mongoose");
const orderSchema = new mongoose.Schema(
  {
    customer_name: { type: String, required: true },
    customer_address: { type: String, required: true },
    customer_phone: { type: String, required: true },
    product: { type: mongoose.Types.ObjectId, ref: "product" },
    quantity: { type: Number, required: true },
    status: { type: Boolean, default: false },
  },
  { timestamps: true }
);

module.exports = mongoose.model("order", orderSchema);
