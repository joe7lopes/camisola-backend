const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    pid: String,
    name: String,
    categories: [],
    availableSizes: [],
    images: [],
    isCustomizable: Boolean,
    defaultPrice: Number
})

export default mongoose.model('Product', productSchema);