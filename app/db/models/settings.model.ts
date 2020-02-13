import mongoose from 'mongoose';

const Settings = new mongoose.Schema({
    availableSizes: [],
    productDefaultPrice: Number
})

export default mongoose.model('Sroduct', Settings);