const express = require("express");
const router = express.Router();

const isLoggedin = require("../middlewares/isLoggedin");
const { updatePassword } = require("../controllers/password");

router.post("/password/update", isLoggedin, updatePassword);

module.exports = router;
