const Knex = require('knex');
const express = require('express');
const morgan = require('morgan');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const knexConfig = require('../knexfile');

const Model = require('objection').Model;
const cors = require('cors');
const paths = require('path');
const router = require('./routes');

const port = process.env.PORT || 3000;

dotenv.load()

const knex = Knex(knexConfig.development);
Model.knex(knex);

const app = express()
  .use(cors())
  .use(morgan('dev'))
  .use(bodyParser.json())
  .use(bodyParser.urlencoded({extended: true }))
  .set('json spaces', 2);
// pass all request to router
app.use('/', router);

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
