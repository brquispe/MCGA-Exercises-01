const mongoose = require('mongoose');
const { Schema } = mongoose;

const ProductSchema = new Schema({
  productId: String,
  name: {
    type: String,
    maxLength: 50,
    required: true,
    unique: true
  },
  isDeleted: {
    type: Boolean,
    required: true,
    default: false
  }
})

module.exports = {
  Product: mongoose.model('Products', ProductSchema)
}