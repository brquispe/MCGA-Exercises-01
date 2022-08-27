const express = require('express');
const { companyService } = require('../services/company.service');
const router = express.Router();

router.get('/companies', async (req, res) => {
  const companies = await companyService.getCompanyList();
  res.send(companies);
})

router.get('/companies/:companyId', async(req, res) => {
  const { companyId } = req.params;
  const company = await companyService.getCompany(companyId);
  res.send(company);
});

module.exports = router;
