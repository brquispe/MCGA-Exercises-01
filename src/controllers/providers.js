const { Provider } = require('../models/provider');

const getProviderList = async (req, res) => {
  const providers = await Provider.find({ isDeleted: false });
  return res.send(providers);
};

module.exports = {
  getProviderList
};
