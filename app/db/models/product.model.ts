const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    pid: String,
    name: String,
    categories: [],
    availableSizes: [],
    images: [],
    isCustomizable: Boolean,
    defaultPrice: Number
})

module.exports = mongoose.model('Product', productSchema);