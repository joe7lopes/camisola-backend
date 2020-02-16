const mongoose = require('mongoose');

const SettingsSchema = new mongoose.Schema({
  availableSizes: [],
  productDefaultPrice: Number,
  stampingExtraCost: Number
});

SettingsSchema.methods.toJSON = function() {
  var obj = this.toObject();
  delete obj._id;
  delete obj.__v;
  return obj;
};

module.exports = mongoose.model('Settings', SettingsSchema);
