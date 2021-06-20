const express = require("express");
const router = express.Router();

const bodyvalidations = require("../middlewares/bodyvalidation");
const isLoggedin = require("../middlewares/isLoggedin");
const nameValidation = require("../validations/name");
const hasPermission = require("../middlewares/hasPermission");

const {
  getCategory,
  insertCategory,
  updateCategory,
  removeCategory,
} = require("../controllers/category");

router.get("/category", isLoggedin, hasPermission("categorys"), getCategory);
router.post(
  "/category",
  isLoggedin,
  hasPermission("categorys"),
  nameValidation,
  bodyvalidations,
  insertCategory
);
router.put(
  "/category",
  isLoggedin,
  hasPermission("categorys"),
  nameValidation,
  bodyvalidations,
  updateCategory
);
router.delete(
  "/category/:id",
  isLoggedin,
  hasPermission("categorys"),
  removeCategory
);

module.exports = router;
