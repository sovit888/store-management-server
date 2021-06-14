const { check } = require("express-validator");

module.exports = [
  check("name")
    .notEmpty()
    .withMessage("Name is requird")
    .isLength({ min: 5 })
    .withMessage("Name should be at least 5 characters long"),
];
