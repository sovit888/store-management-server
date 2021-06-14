const express = require("express");
const router = express.Router();

const bodyvalidations = require("../middlewares/bodyvalidation");
const nameValidation = require("../validations/name");

const {
  getBrand,
  insertBrand,
  updateBrand,
  removeBrand,
} = require("../controllers/brand");

router.get("/brand", getBrand);
router.post("/brand", nameValidation, bodyvalidations, insertBrand);
router.put("/brand", nameValidation, bodyvalidations, updateBrand);
router.delete("/brand/:id", removeBrand);

module.exports = router;
