const express = require("express");
const router = express.Router();

const bodyvalidations = require("../middlewares/bodyvalidation");
const isLoggedin = require("../middlewares/isLoggedin");
const hasPermission = require("../middlewares/hasPermission");
const userValidation = require("../validations/userValidation");

const {
  getUsers,
  updateUserGroup,
  removeUser,
} = require("../controllers/user");

router.get("/user", isLoggedin, hasPermission("users"), getUsers);
router.put(
  "/group",
  isLoggedin,
  hasPermission("users"),
  userValidation,
  bodyvalidations,
  updateUserGroup
);
router.delete("/user/:id", isLoggedin, hasPermission("users"), removeUser);

module.exports = router;
