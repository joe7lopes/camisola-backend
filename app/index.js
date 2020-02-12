const app = require('express')();
const bodyParser = require('body-parser');
const routes = require('./routes');
const port = 3001;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(routes);

app.listen(port, () => {
  console.log('server lunched');
});
