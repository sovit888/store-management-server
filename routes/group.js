const express = require("express");
const router = express.Router();

const bodyvalidations = require("../middlewares/bodyvalidation");
const nameValidation = require("../validations/name");
const isLoggedin = require("../middlewares/isLoggedin");
const isAdmin = require("../middlewares/isAdmin");

const {
  getGroup,
  insertGroup,
  updateGroup,
  removeGroup,
} = require("../controllers/group");

router.get("/group", isLoggedin, isAdmin, getGroup);
router.post(
  "/group",
  isLoggedin,
  isAdmin,
  nameValidation,
  bodyvalidations,
  insertGroup
);
router.put(
  "/group",
  isLoggedin,
  isAdmin,
  nameValidation,
  bodyvalidations,
  updateGroup
);
router.delete("/group/:id", isLoggedin, isAdmin, removeGroup);

module.exports = router;
