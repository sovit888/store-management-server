const express = require("express");
const router = express.Router();

const isLoggedin = require("../middlewares/isLoggedin");
const hasPermission = require("../middlewares/hasPermission");
const bodyvalidations = require("../middlewares/bodyvalidation");
const orderValidation = require("../validations/orderValidation");

const {
  getOrders,
  createOrder,
  updateOrder,
  singleOrder,
  removeOrder,
} = require("../controllers/order");

router.get("/order", isLoggedin, hasPermission("orders"), getOrders);
router.get("/order/:id", isLoggedin, hasPermission("orders"), singleOrder);
router.post(
  "/order",
  isLoggedin,
  hasPermission("orders"),
  orderValidation,
  bodyvalidations,
  createOrder
);
router.put("/order/:id", isLoggedin, hasPermission("orders"), updateOrder);
router.delete("/order/:id", isLoggedin, hasPermission("orders"), removeOrder);

module.exports = router;
