const express = require("express");
const router = express.Router();

const bodyvalidations = require("../middlewares/bodyvalidation");
const isLoggedin = require("../middlewares/isLoggedin");
const nameValidation = require("../validations/name");
const hasPermission = require("../middlewares/hasPermission");

const {
  getAttribute,
  insertAttribute,
  updateAttribute,
  removeAttribute,
} = require("../controllers/attribute");

router.get("/attribute", isLoggedin, hasPermission("attributes"), getAttribute);
router.post(
  "/attribute",
  isLoggedin,
  hasPermission("attributes"),
  nameValidation,
  bodyvalidations,
  insertAttribute
);
router.put(
  "/attribute",
  isLoggedin,
  hasPermission("attributes"),
  nameValidation,
  bodyvalidations,
  updateAttribute
);
router.delete(
  "/attribute/:id",
  isLoggedin,
  hasPermission("attributes"),
  removeAttribute
);

module.exports = router;
