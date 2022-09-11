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
};

const createProvider = async (req, res) => {
  const provider = {
    providerId: req.body.providerId,
    name: req.body.name,
  };
  const newProvider = new Provider(provider);
  const result = await newProvider.save();

  return res.status(201).send(result);
};

const updateProvider = async (req, res) => {
  const providerId = req.params.providerId;
  const newData = {
    $set: {
      ...(req.body.providerId && { providerId: req.body.providerId }),
      ...(req.body.name && { name: req.body.name }),
    },
  };
  const provider = await Provider.findOne({ providerId });
  if (!provider) {
    return res.status(404).send({ message: 'Provider not found!' });
  }
  const result = await Provider.updateOne({ providerId }, newData);

  return res.send(result);
};

module.exports = {
  getProviderList,
  getProvider,
  createProvider,
  updateProvider,
};
