const express = require('express');
const router = express.Router();
const providersController = require('../controllers/providers');
const RESOURCE_ROUTE = '/providers';

router.get(RESOURCE_ROUTE, providersController.getProviderList);

module.exports = router;
