const products = require('../data/products.json');

const getProductList = (req, res) => {
  const products = require('../data/products.json');
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
