const products = require('../data/products.json');
const { Product } = require('../models/product');

const getProductList = async (req, res) => {
  const products = await Product.find({ isDeleted: false });
  return res.send(products);
};

const createProduct = (req, res) => {
  const product = {
    name: req.body.name,
  };
  const newId = products[products.length - 1].id + 1;
  const newProduct = { ...product, id: newId };
  products.push(newProduct);

  return res.status(201).send(newProduct);
};

module.exports = {
  getProductList,
  createProduct
};
