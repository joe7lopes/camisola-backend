import mongoose from 'mongoose';
const url = 'mongodb://localhost:27017/camisola?authSource=admin';

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true
};

class DB {

  connect() {
    mongoose.Promise = global.Promise;
    return mongoose.connect(url, options);
  };

  disconnect() {
    return mongoose.disconnect();
  }
}

export default new DB;
