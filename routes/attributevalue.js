const express = require("express");
const router = express.Router();

const bodyvalidations = require("../middlewares/bodyvalidation");
const isLoggedin = require("../middlewares/isLoggedin");
const attributeValidation = require("../validations/attributeValidation");
const nameValidation = require("../validations/name");
const hasPermission = require("../middlewares/hasPermission");

const {
  getAttributeValues,
  insertAttributeValues,
  updateAttributeValues,
  removeAttributeValues,
} = require("../controllers/attributevalue");

router.get(
  "/:attributeId/values",
  isLoggedin,
  hasPermission("attributes"),
  getAttributeValues
);
router.post(
  "/:attributeId/values",
  isLoggedin,
  hasPermission("attributes"),
  attributeValidation,
  bodyvalidations,
  insertAttributeValues
);

router.put(
  "/:attributeId/values",
  isLoggedin,
  hasPermission("attributes"),
  nameValidation,
  bodyvalidations,
  updateAttributeValues
);

router.delete(
  "/:attributeId/values/:id",
  isLoggedin,
  hasPermission("attributes"),
  removeAttributeValues
);
module.exports = router;
