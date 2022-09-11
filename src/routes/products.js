const express = require('express');
const productsController = require('../controllers/products');
const router = express.Router();
const RESOURCE_ROUTE = '/products';

router.get(RESOURCE_ROUTE, productsController.getProductList);

router.post(RESOURCE_ROUTE, productsController.createProduct);

module.exports = router;
