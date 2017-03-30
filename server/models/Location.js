const sequelize = require('sequelize');
const db = require('../db/db');

const location = db.define('location', {
  createdAt: {
    type: sequelize.DATE,
    defaultValue: sequelize.NOW,
  },
  updatedAt: {
    type: sequelize.DATE,
    defaultValue: sequelize.NOW,
  },
  id: {type: sequelize.INTEGER, primaryKey: true, autoIncrement: true},
  state: sequelize.STRING,
  city: sequelize.INTEGER
});