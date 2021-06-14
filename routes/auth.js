const express = require("express");
const router = express.Router();

const { loginUser, signupUser, getProfile } = require("../controllers/auth");
const { loginCheck, signupCheck } = require("../validations/auth");
const bodyvalidations = require("../middlewares/bodyvalidation");

router.post("/auth/login", loginCheck, bodyvalidations, loginUser);
router.post("/auth/signup", signupCheck, bodyvalidations, signupUser);
router.get("/profile", getProfile);

module.exports = router;
