const express = require('express');
const productsController = require('../controllers/products');
const router = express.Router();
const RESOURCE_ROUTE = '/products';

router.get(RESOURCE_ROUTE, productsController.getProductList);

router.post(RESOURCE_ROUTE, productsController.createProduct);

router.get(`${RESOURCE_ROUTE}/:productId`, productsController.getProduct);
module.exports = router;
