const sequelize = require('sequelize');
const db = require('../db/db');

const question = db.define('question', {
  createdAt: {
    type: sequelize.DATE,
    defaultValue: sequelize.NOW,
  },
  updatedAt: {
    type: sequelize.DATE,
    defaultValue: sequelize.NOW,
  },
  id: {type: sequelize.INTEGER, primaryKey: true, autoIncrement: true},
  type: sequelize.STRING,
  question: sequelize.STRING
});