const { Provider } = require('../models/provider');

const getProviderList = async (req, res) => {
  const providers = await Provider.find({ isDeleted: false });
  return res.send(providers);
};

const getProvider = async (req, res) => {
  const providerId = req.params.providerId;
  const provider = await Provider.findOne({ providerId });
  if (!provider) {
    return res.status(404).send({ message: 'Provider not found!' });
  }

  return res.send(provider);
}

module.exports = {
  getProviderList,
  getProvider
};
