const { check } = require("express-validator");

module.exports = [
  check("_id")
    .notEmpty()
    .withMessage("Id cannot be empty")
    .isLength({ min: 24 })
    .withMessage("Id should be at least 24 characters"),
  check("group")
    .notEmpty()
    .withMessage("Group cannot be empty")
    .isLength({ min: 24 })
    .withMessage("Group should be at least 24 characters"),
];
