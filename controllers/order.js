const mongoose = require("mongoose");
const OrderModel = require("../models/Order");

exports.getOrders = (req, res) => {
  OrderModel.find()
    .populate("product")
    .then((orders) => {
      return res.json({ orders });
    })
    .catch((error) => {
      return res.status(400).json({ error: "cannot get ordres" });
    });
};

exports.createOrder = (req, res) => {
  const { quantity, total, ...body } = req.body;
  const newOrder = new OrderModel({
    ...body,
    quantity: Number(quantity),
    total: Number(total),
  });
  newOrder
    .save()
    .poulate("product")
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
    .populate("product")
    .then((order) => {
      return res.json({ order });
    })
    .catch((error) => {
      return res.status(400).json({ error: "cannot update ordres" });
    });
};

exports.singleOrder = (req, res) => {
  if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
    return res.status(400).json({ error: "cannot get order" });
  }
  OrderModel.findById(req.params.id)
    .populate("product")
    .then((order) => {
      return res.json({ order });
    })
    .catch((error) => {
      return res.status(400).json({ error: "cannot get ordres" });
    });
};

exports.removeOrder = (req, res) => {
  if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
    return res.status(400).json({ error: "cannot delete ordres" });
  }
  OrderModel.findByIdAndRemove(req.params.id)
    .then((order) => {
      return res.json({ order });
    })
    .catch((error) => {
      return res.status(400).json({ error: "cannot delete ordres" });
    });
};
