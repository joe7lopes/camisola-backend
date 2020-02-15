import DB from './db';
import express from 'express';
import bodyParser from 'body-parser';
import routes from './routes';

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(routes);

const port = 3001;
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

startServer();

export default app;