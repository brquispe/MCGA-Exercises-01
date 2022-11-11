const { Product } = require('../models/product');
const { Provider } = require('../models/provider');

const getProductList = async (req, res) => {
  const products = await Product.find({ isDeleted: false }).populate({
    path: 'provider',
    match: { isDeleted: false },
    select: { name: true },
  });
  return res.json({
    message: products.length > 0 ? 'Products found' : 'Products not found',
    data: products,
    error: false,
  });
};

const createProduct = async (req, res) => {
  const product = {
    name: req.body.name,
    price: req.body.price,
  };
  try {
    const newProduct = new Product(product);
    const result = await newProduct.save();

    return res.status(201).json({
      message: 'Product created!',
      data: result,
      error: false,
    });
  } catch (error) {
    return res.status(400).json({
      message: error,
      data: product,
      error: true,
    });
  }
};

const getProduct = async (req, res) => {
  const productId = req.params.productId;
  try {
    const product = await Product.findById(productId);
    if (!product) {
      return res.status(404).json({
        message: 'Product not found!',
        data: undefined,
        error: true,
      });
    }

    return res.json({
      message: 'Product found',
      data: product,
      error: false,
    });
  } catch (error) {
    return res.status(500).json({
      message: error,
      data: undefined,
      error: true,
    });
  }
};

const updateProduct = async (req, res) => {
  const productId = req.params.productId;
  const newData = {
    name: req.body.name,
    price: req.body.price,
    providerId: req.body.providerId,
  };
  try {
    const product = await Product.findById(productId);
    if (!product) {
      return res.status(404).json({
        message: 'Product not found!',
        data: undefined,
        error: true,
      });
    }
    product.name = newData.name;
    product.price = newData.price;
    if (newData.providerId) {
      const resp = await Provider.findByIdAndUpdate(newData.providerId, {
        $addToSet: { products: product },
      });
      product.provider = resp;
    }
    const result = await product.save();
    return res.json({
      message: 'Product updated!',
      data: result,
      error: false,
    });
  } catch (error) {
    return res.status(400).json({
      message: error,
      data: newData,
      error: true,
    });
  }
};

const deleteProduct = async (req, res) => {
  const productId = req.params.productId;
  try {
    const product = await Product.findById(productId);
    if (!product) {
      return res.status(404).json({
        message: 'Product not found!',
        data: undefined,
        error: true,
      });
    }
    product.isDeleted = true;
    const result = await product.save();
    return res.status(204).json({
      message: 'Deleted product!',
      data: result,
      error: false,
    });
  } catch (error) {
    return res.status(400).json({
      message: error,
      data: product,
      error: true,
    });
  }
};

const activateProduct = async (req, res) => {
  const productId = req.params.productId;
  try {
    const product = await Product.findById(productId);
    if (!product) {
      return res.status(404).json({
        message: 'Product not found!',
        data: undefined,
        error: true,
      });
    }
    product.isDeleted = false;
    const result = await product.save();
    return res.status(204).json({
      message: 'Activated product!',
      data: result,
      error: false,
    });
  } catch (error) {
    return res.status(400).json({
      message: error,
      data: product,
      error: true,
    });
  }
};

module.exports = {
  getProductList,
  createProduct,
  getProduct,
  updateProduct,
  deleteProduct,
  activateProduct,
};
