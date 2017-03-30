const Sequelize = require('sequelize');
const db = require('../db/db');

const Location = db.define('Location', {
  createdAt: {
    type: Sequelize.DATE,
    defaultValue: Sequelize.NOW,
  },
  updatedAt: {
    type: Sequelize.DATE,
    defaultValue: Sequelize.NOW,
  },
  id: {type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true},
  state: Sequelize.STRING,
  city: Sequelize.INTEGER
});