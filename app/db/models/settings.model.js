const mongoose = require('mongoose');
const ProductCategorySchema = require('./common_schema');

const SettingsSchema = new mongoose.Schema({
  sizes: [String],
  productDefaultPrice: Number,
  stampingExtraCost: Number,
  productCategories:[ProductCategorySchema]
});

SettingsSchema.methods.toJSON = function() {
  let obj = this.toObject();
  delete obj._id;
  delete obj.__v;
  return obj;
};

module.exports = mongoose.model('Settings', SettingsSchema);
