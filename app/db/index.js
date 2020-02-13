const mongoose = require('mongoose');
const url = 'mongodb://localhost:27017/camisola?authSource=admin';

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true
};

const connect = () => mongoose.connect(url, options);

module.exports = connect;
