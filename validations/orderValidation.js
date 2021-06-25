const { check } = require("express-validator");
module.exports = [
  check("customer_name")
    .notEmpty()
    .withMessage("Customer Name is required")
    .isLength({ min: 2 })
    .withMessage("Customer Name should be at least 2 characters"),
  check("quantity").notEmpty().withMessage("Product Price is required"),
  check("customer_address")
    .notEmpty()
    .withMessage("Customer Address Name is required")
    .isLength({ min: 2 })
    .withMessage("Customer Address should be at least 2 characters"),
  check("customer_phone")
    .notEmpty()
    .withMessage("Phone is required")
    .isLength({ min: 8 })
    .withMessage("Phone should be at least 8 characters"),
  check("product").notEmpty().withMessage("Product is required"),
];
