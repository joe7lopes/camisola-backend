import DB from './db';
import app from './app'

const port = 3001;


startServer();

const startServer = async () => {
    console.log('Starting server...');
    try {
      await DB.connect()
      console.log('connect to db success');
      app.listen(port, () => {
        console.log('Http server lunched');
      });
  
    } catch (err) {
      console.log('Failed to start server ', err);
    }
  }