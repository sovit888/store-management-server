const express = require("express");
const router = express.Router();

const isLoggedin = require("../middlewares/isLoggedin");
const hasPermission = require("../middlewares/hasPermission");

module.exports = router;
