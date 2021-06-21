const { check } = require("express-validator");

module.exports = [
  check("name")
    .notEmpty()
    .withMessage("Name is requird")
    .isLength({ min: 3 })
    .withMessage("Name should be at least 3 characters long"),
];
