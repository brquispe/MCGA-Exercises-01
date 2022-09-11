const mongoose = require('mongoose');
const { Schema } = mongoose;

const ProviderSchema = new Schema({
  providerId: {
    type: String,
    required: true,
    unique: true
  },
  name: {
    type: String,
    required: true
  }
}, { timestamps: true });

module.exports = {
  Provider: mongoose.model('Providers', ProviderSchema)
};
