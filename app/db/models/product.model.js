const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    pid: String,
    name: String,
    categories: [],
    availableSizes: [],
    images: [],
    isCustomizable: Boolean,
    defaultPrice: Number
});

productSchema.methods.toJSON = function() {
    let obj = this.toObject();
    delete obj._id;
    delete obj.__v;
    return obj;
};


module.exports = mongoose.model('Product', productSchema);