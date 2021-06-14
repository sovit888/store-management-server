const express = require("express");
const router = express.Router();

const bodyvalidations = require("../middlewares/bodyvalidation");
const nameValidation = require("../validations/name");

const {
  getCategory,
  insertCategory,
  updateCategory,
  removeCategory,
} = require("../controllers/category");

router.get("/category", getCategory);
router.post("/category", nameValidation, bodyvalidations, insertCategory);
router.put("/category", nameValidation, bodyvalidations, updateCategory);
router.delete("/category/:id", removeCategory);

module.exports = router;
