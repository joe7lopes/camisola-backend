const mongoose = require('mongoose');

const UsersSchema = new mongoose.Schema({
  userId: {type: Number, required: true},
  fistName: {type: String, required: true},
  lastName: {type: String, required: true},
  email: {type: String, required: true},
  phone: {type: String, required: true},
  address: {type: String, required: true},
  city: {type: String, required: true},
  postCode: {type: String, required: true}
});

UsersSchema.methods.toJSON = function() {
  let obj = this.toObject();
  delete obj._id;
  delete obj.__v;
  return obj;
};

module.exports = mongoose.model('Users', UsersSchema);
