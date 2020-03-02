const mongoose = require('mongoose');
const uuid = require('uuid');
const {ProductCategorySchema} = require('./common_schema');

const SizeSchema = new mongoose.Schema({
  size: {type: String, required: true},
  price: {type: Number, required: true}
});

const productImageSchema = new mongoose.Schema({
  name: {type: String, required: true},
  url: String,
  file: String,
  isDefault: Boolean
});

const productSchema = new mongoose.Schema({
  pid: {type: String, default: () => uuid.v4()},
  name: {type: String, required: true},
  categories: {type: [ProductCategorySchema], required: true},
  sizes: [SizeSchema],
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
