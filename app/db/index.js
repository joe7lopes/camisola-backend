const mongoose = require('mongoose');
const url = 'mongodb://localhost:27017/trzebnica?authSource=admin';

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true
};

const connect = async () => {
  try {
    await mongoose.connect(url, options);
    console.log('connect to db success');
  } catch (err) {
    console.log('connect to db failed', err);
  }
};

module.exports = {
  connect
};
