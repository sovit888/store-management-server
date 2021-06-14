const express = require("express");
const router = express.Router();

const bodyvalidations = require("../middlewares/bodyvalidation");
const nameValidation = require("../validations/name");

const {
  getGroup,
  insertGroup,
  updateGroup,
  removeGroup,
} = require("../controllers/group");

router.get("/group", getGroup);
router.post("/group", nameValidation, bodyvalidations, insertGroup);
router.put("/group", nameValidation, bodyvalidations, updateGroup);
router.delete("/group/:id", removeGroup);

module.exports = router;
