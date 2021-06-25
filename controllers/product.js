const ProductModel = require("../models/Product");
const upload = require("../utils/upload");
const multer = require("multer");
const mongoose = require("mongoose");

exports.getProduct = (req, res) => {
  ProductModel.find()
    .then((products) => {
      return res.json({ products });
    })
    .catch((error) => {
      return res.status(422).json({ error: "cannot get products" });
    });
};

exports.createProduct = (req, res) => {
  upload(req, res, (error) => {
    if (error instanceof multer.MulterError || error) {
      return res.status(422).json({ error: "Cannot insert new product" });
    }
    const { price, ...body } = req.body;
    let newProduct = new ProductModel({ ...body, price: Number(price) });
    if (req.file) {
      newProduct = new ProductModel({
        ...body,
        price: Number(price),
        image: req.file.filename,
      });
    }
    newProduct.save((error, product) => {
      if (error) {
        return res.status(422).json({ error: "Cannot insert new product" });
      }
      return res.json({ product });
    });
  });
};

exports.updateProduct = (req, res) => {
  if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
    return res.status(422).json({ error: "Cannot update product" });
  }
  upload(req, res, (error) => {
    if (error instanceof multer.MulterError || error) {
      return res.status(422).json({ error: "Cannot update product" });
    }
    const { price, ...body } = req.body;
    let data = { ...body, price: Number(price) };
    if (req.file) {
      data = { ...data, image: req.file.filename };
    }
    ProductModel.findByIdAndUpdate(req.params.id, { $set: data }, { new: true })
      .then((product) => {
        return res.json({ product });
      })
      .catch((error) => {
        return res.status(422).json({ error: "Cannot update product" });
      });
  });
};

exports.deleteProduct = (req, res) => {
  if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
    return res.status(422).json({ error: "Cannot delete product" });
  }
  ProductModel.findByIdAndDelete(req.params.id)
    .then((product) => {
      return res.json({ product });
    })
    .catch((error) => {
      return res.status(422).json({ error: "Cannot delete product" });
    });
};

exports.getSingleProduct = (req, res) => {
  if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
    return res.status(422).json({ error: "Cannot delete product" });
  }
  ProductModel.findById(req.params.id)
    .then((product) => {
      return res.json({ product });
    })
    .catch((error) => {
      return res.status(400).json({ error: "cannt get products" });
    });
};
