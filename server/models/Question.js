const Sequelize = require('sequelize');
const db = require('../db/db');

const Question = db.define('Question', {
  createdAt: {
    type: Sequelize.DATE,
    defaultValue: Sequelize.NOW,
  },
  updatedAt: {
    type: Sequelize.DATE,
    defaultValue: Sequelize.NOW,
  },
  id: {type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true},
  type: Sequelize.STRING,
  question: Sequelize.STRING
});