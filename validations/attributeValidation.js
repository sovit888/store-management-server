const { check } = require("express-validator");

module.exports = [
  check("name")
    .notEmpty()
    .withMessage("Name is requird")
    .isLength({ min: 3 })
    .withMessage("Name should be at least 3 characters long"),
  check("attribute")
    .notEmpty()
    .withMessage("Attribute cannot be empty")
    .isLength({ min: 24 })
    .withMessage("Attribute should be at least 24 characters"),
];
