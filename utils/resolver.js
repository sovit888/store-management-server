const BrandModel = require("../models/Brand");
const CategoryModel = require("../models/Category");
const StoreModel = require("../models/Store");
const AttributeValueModel = require("../models/AttributeValue");
const UserModel = require("../models/User");
const GroupModel = require("../models/Group");
const ProductModel = require("../models/Product");
const OrderModel = require("../models/Order");

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
  income: () => {
    return OrderModel.aggregate([
      { $match: { status: true } },
      {
        $group: {
          _id: null,
          amount: { $sum: "$total" },
        },
      },
    ])
      .then((result) => {
        return result[0].amount;
      })
      .catch((error) => {
        return 0;
      });
  },
  sales: () => {
    return OrderModel.estimatedDocumentCount().then((result) => result);
  },
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
