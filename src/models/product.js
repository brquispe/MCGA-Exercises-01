const mongoose = require('mongoose');
const { Schema } = mongoose;

const ProductSchema = new Schema({
  productId: {
    type: String,
    required: true,
    unique: true,
  },
  name: {
    type: String,
    maxLength: 50,
    required: true,
    unique: true
  },
  price: {
    type: Number,
    required: true,
    min: 0
  },
  provider: {
    type: Schema.Types.ObjectId,
    ref: 'Providers'
  },
  isDeleted: {
    type: Boolean,
    required: true,
    default: false
  }
}, { timestamps: true });

module.exports = {
  Product: mongoose.model('Products', ProductSchema)
}