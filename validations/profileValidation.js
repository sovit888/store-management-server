const { check } = require("express-validator");
module.exports = [
  check("username")
    .notEmpty()
    .withMessage("Username is required")
    .isLength({ min: 5 })
    .withMessage("Username should be at least 5 characters"),
  check("first_name")
    .notEmpty()
    .withMessage("First Name is required")
    .isLength({ min: 2 })
    .withMessage("first Name should be at least 2 characters"),
  check("last_name")
    .notEmpty()
    .withMessage("Last Name is required")
    .isLength({ min: 2 })
    .withMessage("Last Nname should be at least 2 characters"),
  check("phone")
    .notEmpty()
    .withMessage("Phone Number is required")
    .isLength({ min: 8, max: 14 })
    .withMessage("Phone should be at least 8 characters and not more than 14"),
  check("gender").notEmpty().withMessage("Gender cannot be empty"),
];
