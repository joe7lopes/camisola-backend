const mongoose = require('mongoose');
const url = 'mongodb://localhost:27017/camisola?authSource=admin';

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true
};

module.exports.connect = () => {
  mongoose.Promise = global.Promise;
  return mongoose.connect(url, options);
};

module.exports.disconnect = () => mongoose.disconnect();