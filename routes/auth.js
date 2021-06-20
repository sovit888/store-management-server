const express = require("express");
const router = express.Router();

const { loginUser, signupUser, getProfile } = require("../controllers/auth");
const { loginCheck, signupCheck } = require("../validations/auth");
const bodyvalidations = require("../middlewares/bodyvalidation");
const isLoggedin = require("../middlewares/isLoggedin");
const isAdmin = require("../middlewares/isAdmin");

router.post("/auth/login", loginCheck, bodyvalidations, loginUser);
router.post(
  "/auth/signup",
  isLoggedin,
  isAdmin,
  signupCheck,
  bodyvalidations,
  signupUser
);
router.get("/profile", isLoggedin, getProfile);

module.exports = router;
