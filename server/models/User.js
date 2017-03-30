const Sequelize = require('sequelize');
const db = require('../db/db');

const User = db.define('User', {
  createdAt: {
    type: Sequelize.DATE,
    defaultValue: Sequelize.NOW,
  },
  updatedAt: {
    type: Sequelize.DATE,
    defaultValue: Sequelize.NOW,
  },
  id: {type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true},
  name: Sequelize.STRING,
  profile_img: Sequelize.STRING,
  industry: Sequelize.INTEGER,
  location: Sequelize.INTEGER,
  email: Sequelize.STRING,
  address: Sequelize.STRING
});