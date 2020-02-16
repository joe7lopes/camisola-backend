const DB = require('./db');
const app = require('./app');

const port = 3001;

const startServer = async () => {
  console.log('Starting server...');
  try {
    await DB.connect();
    console.log('connect to db success');
    app.listen(port, () => {
      console.log('Http server lunched');
    });
  } catch (err) {
    console.log('Failed to start server ', err);
  }
};

startServer();
