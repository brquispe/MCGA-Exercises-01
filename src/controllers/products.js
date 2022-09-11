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

const getProduct = async (req, res) => {
  const productId = req.params.productId;
  console.log(productId);
  const product = await Product.findOne({ productId });
  if (!product) {
    return res.status(404).send({message: 'Product not found!'});
  }

  return res.send(product);
}
module.exports = {
  getProductList,
  createProduct,
  getProduct,
};
