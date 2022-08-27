const express = require('express');
const { authService } = require('../services/auth.service');
const router = express.Router()

router.get('/login', (req, res) => authService.getLoginPage(res))

module.exports = router;