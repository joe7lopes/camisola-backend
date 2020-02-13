const connect = require('./db');
const app = require('express')();
const bodyParser = require('body-parser');
const routes = require('./routes');
const port = 3001;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(routes);

app.listen(port, async() => {
  console.log('Http server lunched');

  try {
   await connect();
    console.log('connect to db success');
  } catch (err) {
    console.log('connect to db failed', err);
  }
});
