const fs = require('fs');
const path = require('path');

class EmployeeService {
  getEmployeeList() {
    const filePath = path.join(__dirname + './../data/people.json');
    return new Promise((resolve, reject) => {
      fs.readFile(filePath, (err, data) => {
        if (err) {
          return reject(err);
        }
        const buffer = Buffer.from(data);
        const json = JSON.parse(buffer);
        resolve(json);
      });
    });
  }
}

const employeeService = new EmployeeService();
module.exports = {
  employeeService,
};
