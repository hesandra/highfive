const sequelize = require('sequelize');
const db = require('../db/db');

const company = db.define('company', {
  createdAt: {
    type: sequelize.DATE,
    defaultValue: sequelize.NOW,
  },
  updatedAt: {
    type: sequelize.DATE,
    defaultValue: sequelize.NOW,
  },
  id: {type: sequelize.INTEGER, primaryKey: true, autoIncrement: true},
  name: sequelize.STRING,
  profile_img: sequelize.STRING,
  industry: sequelize.INTEGER,
  location: sequelize.INTEGER,
  email: sequelize.STRING,
  address: sequelize.STRING
});