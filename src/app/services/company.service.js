const fs = require('fs');
const path = require('path');
class CompanyService {
  getCompanyList() {
    return new Promise((resolve, reject) => {
      fs.readFile(path.join(__dirname + './../data/companies.json'), (err, data) => {
        if (err) {
          reject(err);
        }
        const buffer = Buffer.from(data);
        const json = JSON.parse(buffer);
        resolve(json);
      })
    })
  }
}

const companyService = new CompanyService();
module.exports = {
  companyService
}