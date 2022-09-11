const { Product } = require('../models/product');

const getProductList = async (req, res) => {
  const products = await Product.find({ isDeleted: false });
  return res.send(products);
};

const createProduct = async (req, res) => {
  const product = {
    productId: req.body.productId,
    name: req.body.name,
    price: req.body.price
  };
  const newProduct = new Product(product);
  const result = await newProduct.save();

  return res.status(201).send(result);
};

module.exports = {
  getProductList,
  createProduct
};
