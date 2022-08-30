const express = require('express');
const { productService } = require('../services/product.service');
const router = express.Router();

router.get('/products', async (req, res) => {
  const productList = await productService.getProductList()
  res.send(productList)
})

module.exports = router;
