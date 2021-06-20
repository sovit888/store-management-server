const express = require("express");
const router = express.Router();

const bodyvalidations = require("../middlewares/bodyvalidation");
const isLoggedin = require("../middlewares/isLoggedin");
const nameValidation = require("../validations/name");
const hasPermission = require("../middlewares/hasPermission");

const {
  getBrand,
  insertBrand,
  updateBrand,
  removeBrand,
} = require("../controllers/brand");

router.get("/brand", isLoggedin, hasPermission("brands"), getBrand);
router.post(
  "/brand",
  isLoggedin,
  hasPermission("brands"),
  nameValidation,
  bodyvalidations,
  insertBrand
);
router.put(
  "/brand",
  isLoggedin,
  hasPermission("brands"),
  nameValidation,
  bodyvalidations,
  updateBrand
);
router.delete("/brand/:id", isLoggedin, hasPermission("brands"), removeBrand);

module.exports = router;
