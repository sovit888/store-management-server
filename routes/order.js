const express = require("express");
const router = express.Router();

const isLoggedin = require("../middlewares/isLoggedin");
const hasPermission = require("../middlewares/hasPermission");
const bodyvalidations = require("../middlewares/bodyvalidation");
const productValidation = require("../validations/productValidation");

const { getOrders, createOrder, updateOrder } = require("../controllers/order");

router.get("/order", isLoggedin, hasPermission("orders"), getOrders);
router.post(
  "/order",
  isLoggedin,
  hasPermission("orders"),
  productValidation,
  bodyvalidations,
  createOrder
);
router.put("/order/:id", isLoggedin, hasPermission("orders"), updateOrder);

module.exports = router;
