const express = require('express');
const { employeeService } = require('../services/employee.service');
const router = express.Router();

router.get('/employees', async (req, res) => {
  const employees = await employeeService.getEmployeeList();
  res.send(employees);
});

router.get('/employees/:employeeId', async (req, res) => {
  const { employeeId } = req.params;
  const employee = await employeeService.getEmployee(employeeId);
  res.send(employee);
});

module.exports = router;
