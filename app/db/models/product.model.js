const mongoose = require('mongoose');
const uuid = require('uuid');

const getCategories = () => {
  return ['benfica', 'porto'];
};

const AvailableSizeSchema = new mongoose.Schema({
  size: {type: String, enum: ['XS', 'S', 'M', 'L', 'XL', 'XXL'], required: true},
  price: Number
});

const productImageSchema = new mongoose.Schema({
  name: String,
  url: String,
  isDefault: Boolean
});

const productSchema = new mongoose.Schema({
  pid: {type: String, default: () => uuid.v4()},
  name: {type: String, required: true},
  categories: {type: [String], enum: getCategories(), required: true},
  availableSizes: [AvailableSizeSchema],
  images: [productImageSchema],
  isCustomizable: {type: Boolean, default: false},
  defaultPrice: {type: Number, required: true}
});

productSchema.methods.toJSON = function () {
  let obj = this.toObject();
  delete obj._id;
  delete obj.__v;
  return obj;
};

module.exports = mongoose.model('Product', productSchema);