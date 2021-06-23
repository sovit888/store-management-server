const express = require("express");
const router = express.Router();

const { getProfile, updateProfile } = require("../controllers/profile");
const bodyvalidations = require("../middlewares/bodyvalidation");
const isLoggedin = require("../middlewares/isLoggedin");
const profileValidation = require("../validations/profileValidation");

router.get("/profile", isLoggedin, getProfile);
router.put(
  "/profile",
  isLoggedin,
  profileValidation,
  bodyvalidations,
  updateProfile
);

module.exports = router;
