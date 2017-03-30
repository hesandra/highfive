const sequelize = require('sequelize');
const db = require('../db/db');

const jobpost = db.define('jobpost', {
  createdAt: {
    type: sequelize.DATE,
    defaultValue: sequelize.NOW,
  },
  updatedAt: {
    type: sequelize.DATE,
    defaultValue: sequelize.NOW,
  },
  id: {type: sequelize.INTEGER, primaryKey: true, autoIncrement: true},
  title: sequelize.STRING,
  level: sequelize.STRING,
  description: sequelize.STRING,
  company_id: sequelize.INTEGER,
});