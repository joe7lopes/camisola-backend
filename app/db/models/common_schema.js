const mongoose = require('mongoose');

const ProductCategorySchema = new mongoose.Schema({
  name:String,
  displayName:String
});

module.exports = {
  ProductCategorySchema
};