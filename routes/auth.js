const express = require("express");
const router = express.Router();

const { loginUser, signupUser } = require("../controllers/auth");
const { loginCheck, signupCheck } = require("../validations/auth");
const bodyvalidations = require("../middlewares/bodyvalidation");
const isLoggedin = require("../middlewares/isLoggedin");
const hasPermission = require("../middlewares/hasPermission");

router.post("/auth/login", loginCheck, bodyvalidations, loginUser);
router.post(
  "/auth/signup",
  isLoggedin,
  hasPermission("users"),
  signupCheck,
  bodyvalidations,
  signupUser
);

module.exports = router;
