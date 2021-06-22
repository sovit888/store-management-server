const express = require("express");
const router = express.Router();

const bodyvalidations = require("../middlewares/bodyvalidation");
const nameValidation = require("../validations/name");
const isLoggedin = require("../middlewares/isLoggedin");
const hasPermission = require("../middlewares/hasPermission");

const {
  getGroup,
  insertGroup,
  updateGroup,
  removeGroup,
} = require("../controllers/group");

router.get("/group", isLoggedin, hasPermission("groups"), getGroup);
router.post(
  "/group",
  isLoggedin,
  hasPermission("groups"),
  nameValidation,
  bodyvalidations,
  insertGroup
);
router.put(
  "/group",
  isLoggedin,
  hasPermission("groups"),
  nameValidation,
  bodyvalidations,
  updateGroup
);
router.delete("/group/:id", isLoggedin, hasPermission("groups"), removeGroup);

module.exports = router;
