const productService = {
  async getProductList() {
    return await require('../data/products.json');
  },
};

module.exports = { productService };
