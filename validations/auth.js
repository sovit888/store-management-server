const { check } = require("express-validator");
const commonCheck = [
  check("email")
    .notEmpty()
    .withMessage("Email is required")
    .isEmail()
    .withMessage("enter a valid email"),
  check("password")
    .notEmpty()
    .withMessage("Password is required")
    .matches(/[A-Z]/)
    .withMessage("Password should contain at least 1 capital letters")
    .matches(/\d/)
    .withMessage("Password should contain at least 1 digit")
    .matches(/[!@#$%^&*+_-]/)
    .withMessage("Password should contain at least 1 special letters")
    .isLength({ min: 8 })
    .withMessage("Password should be at least 8 characters"),
];

exports.loginCheck = [...commonCheck];
exports.signupCheck = [
  ...commonCheck,
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
  check("group")
    .notEmpty()
    .withMessage("Group cannot be empty")
    .isLength({ min: 24 })
    .withMessage("Group should be at least 24 characters"),
];
