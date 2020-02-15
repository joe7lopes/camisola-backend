import mongoose from 'mongoose';

const settings = new mongoose.Schema({
    availableSizes: [],
    productDefaultPrice: Number
})

export default mongoose.model('Settings', settings);