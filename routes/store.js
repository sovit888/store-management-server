const express = require("express");
const router = express.Router();

const bodyvalidations = require("../middlewares/bodyvalidation");
const nameValidation = require("../validations/name");

const {
  getStore,
  insertStore,
  updateStore,
  removeStore,
} = require("../controllers/store");

router.get("/store", getStore);
router.post("/store", nameValidation, bodyvalidations, insertStore);
router.put("/store", nameValidation, bodyvalidations, updateStore);
router.delete("/store/:id", removeStore);

module.exports = router;
