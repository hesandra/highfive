const Sequelize = require('sequelize');
const db = require('../db/db');

const Jobpost = db.define('Jobpost', {
  createdAt: {
    type: Sequelize.DATE,
    defaultValue: Sequelize.NOW,
  },
  updatedAt: {
    type: Sequelize.DATE,
    defaultValue: Sequelize.NOW,
  },
  id: {type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true},
  title: Sequelize.STRING,
  level: Sequelize.STRING,
  description: Sequelize.STRING,
  company_id: Sequelize.INTEGER,
});