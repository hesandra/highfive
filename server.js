const Knex = require('knex');
const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const knexConfig = require('./knexfile');
const path = require('path');

const Model = require('objection').Model;
const cors = require('cors');
const paths = require('path');
const router = require('./routes');

const port = process.env.PORT || 3000;

console.log(process.env.NODE_ENV);

dotenv.load();

const knex = Knex(knexConfig.development);
Model.knex(knex);

const app = express()
  .use(cors())
  .use(helmet())
  .use(express.static(`${__dirname}/client/build/`))
  .use(morgan('dev'))
  .use(bodyParser.json())
  .use(bodyParser.urlencoded({extended: true }))
  .set('json spaces', 2);
app.options('*', cors());

// pass all request to router
app.use('/', router);

app.get('*', (request, response) => {
  response.sendFile(path.resolve(__dirname, 'client/build', 'index.html'))
});

app.use((err, req, res, next) => {
  if (err) {
    res.status(err.statusCode || err.status || 500).send(err.data || err.message || {});
  } else {
    next();
  }
});

app.listen(port, () => {
  console.log(`Listening on ${port}`);
});

module.exports = app;
