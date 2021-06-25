const express = require("express");
const router = express.Router();

const isLoggedin = require("../middlewares/isLoggedin");
const hasPermission = require("../middlewares/hasPermission");

const {
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct,
  getSingleProduct,
} = require("../controllers/product");

router.get("/product", isLoggedin, hasPermission("products"), getProduct);
router.get(
  "/product/:id",
  isLoggedin,
  hasPermission("products"),
  getSingleProduct
);
router.post("/product", isLoggedin, hasPermission("products"), createProduct);
router.put(
  "/product/:id",
  isLoggedin,
  hasPermission("products"),
  updateProduct
);
router.delete(
  "/product/:id",
  isLoggedin,
  hasPermission("products"),
  deleteProduct
);

module.exports = router;
