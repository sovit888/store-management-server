const mongoose = require("mongoose");
const OrderModel = require("../models/Order");

exports.getOrders = (req, res) => {
  OrderModel.find()
    .then((orders) => {
      return res.json({ orders });
    })
    .catch((error) => {
      return res.status(400).json({ error: "cannot get ordres" });
    });
};

exports.createOrder = (req, res) => {
  const { quantity, ...body } = req.body;
  const newOrder = new OrderModel({ ...body, quantity: Number(quantity) });
  newOrder
    .save()
    .then((order) => {
      return res.json({ order });
    })
    .catch((error) => {
      return res.status(400).json({ error: "cannot insert ordres" });
    });
};

exports.updateOrder = (req, res) => {
  if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
    return res.status(400).json({ error: "cannot update ordres" });
  }
  OrderModel.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true })
    .then((order) => {
      return res.json({ order });
    })
    .catch((error) => {
      return res.status(400).json({ error: "cannot update ordres" });
    });
};
