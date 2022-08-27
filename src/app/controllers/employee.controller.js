const express = require('express');
const { employeeService } = require('../services/employee.service');
const router = express.Router();

router.get('/employees', async (req, res) => {
  const employees = await employeeService.getEmployeeList()
  res.send(employees)
})

module.exports = router;