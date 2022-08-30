const fs = require('fs');
const path = require('path');
const companyService = {
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
  },

  async getCompany(companyId) {
    const companies = await getCompanyList()
    const company = companies.find(c => c.companyId == companyId);
    if (!company) {
      throw new Error('Company not found!');
    }
    return company
  }
}

module.exports = {
  companyService
}