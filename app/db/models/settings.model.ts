import mongoose from 'mongoose';

const SettingsSchema = new mongoose.Schema({
    availableSizes: [],
    productDefaultPrice: Number
});

SettingsSchema.methods.toJSON = function () {
    var obj = this.toObject();
    delete obj._id
    delete obj.__v
    return obj;
}


export default mongoose.model('Settings', SettingsSchema);