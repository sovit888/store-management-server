const { body } = require("express-validator");
module.exports = [
  body("name")
    .notEmpty()
    .withMessage("Product Name is required")
    .isLength({ min: 2 })
    .withMessage("Product Name should be at least 2 characters"),
  body("price").notEmpty().withMessage("Product Price is required"),
  body("store")
    .notEmpty()
    .withMessage("Store Name is required")
    .isLength({ min: 2 })
    .withMessage("Store Name should be at least 2 characters"),
  body("brand")
    .notEmpty()
    .withMessage("Brand Name is required")
    .isLength({ min: 2 })
    .withMessage("Brand Name should be at least 2 characters"),
  body("store")
    .notEmpty()
    .withMessage("Store Name is required")
    .isLength({ min: 2 })
    .withMessage("Store Name should be at least 2 characters"),
  body("category")
    .notEmpty()
    .withMessage("Category Name is required")
    .isLength({ min: 2 })
    .withMessage("Category Name should be at least 2 characters"),
];
