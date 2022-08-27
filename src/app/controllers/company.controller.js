const express = require('express');
const { companyService } = require('../services/company.service');
const router = express.Router();

router.get('/companies', async (req, res) => {
  const companies = await companyService.getCompanyList();
  res.send(companies);
})

module.exports = router;
