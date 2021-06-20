const express = require("express");
const router = express.Router();

const bodyvalidations = require("../middlewares/bodyvalidation");
const isLoggedin = require("../middlewares/isLoggedin");
const nameValidation = require("../validations/name");
const hasPermission = require("../middlewares/hasPermission");

const {
  getStore,
  insertStore,
  updateStore,
  removeStore,
} = require("../controllers/store");

router.get("/store", isLoggedin, hasPermission("stores"), getStore);
router.post(
  "/store",
  isLoggedin,
  hasPermission("stores"),
  nameValidation,
  bodyvalidations,
  insertStore
);
router.put(
  "/store",
  isLoggedin,
  hasPermission("stores"),
  nameValidation,
  bodyvalidations,
  updateStore
);
router.delete("/store/:id", isLoggedin, hasPermission("stores"), removeStore);

module.exports = router;
