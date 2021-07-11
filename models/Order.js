const mongoose = require("mongoose");

let months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const orderSchema = new mongoose.Schema(
  {
    customer_name: { type: String, required: true },
    customer_address: { type: String, required: true },
    customer_phone: { type: String, required: true },
    product: { type: mongoose.Types.ObjectId, ref: "product" },
    quantity: { type: Number, required: true },
    status: { type: Boolean, default: false },
    total: { type: Number, required: true },
    month: { type: String, default: months[new Date().getMonth()] },
  },
  { timestamps: true }
);

module.exports = mongoose.model("order", orderSchema);
