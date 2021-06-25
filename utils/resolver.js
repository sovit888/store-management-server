const BrandModel = require("../models/Brand");
const CategoryModel = require("../models/Category");
const StoreModel = require("../models/Store");
const AttributeValueModel = require("../models/AttributeValue");
const UserModel = require("../models/User");
const GroupModel = require("../models/Group");
const ProductModel = require("../models/Product");

module.exports = {
  brands: () => {
    return BrandModel.find()
      .then((result) => {
        return result;
      })
      .catch((error) => {
        return [];
      });
  },
  stores: () => {
    return StoreModel.find()
      .then((result) => {
        return result;
      })
      .catch((error) => {
        return [];
      });
  },
  categorys: () => {
    return CategoryModel.find()
      .then((result) => {
        return result;
      })
      .catch((error) => {
        return [];
      });
  },
  attributes: () => {
    return AttributeValueModel.find()
      .populate("attribute")
      .then((result) => {
        return result;
      })
      .catch((error) => {
        return [];
      });
  },
  users: () => {
    return UserModel.estimatedDocumentCount().then((result) => result);
  },
  groups: () => {
    return GroupModel.estimatedDocumentCount().then((result) => result);
  },
  income: () => 21,
  sales: () => 10,
  products: () => {
    return ProductModel.find()
      .then((products) => {
        return products;
      })
      .catch((error) => {
        return [];
      });
  },
};
