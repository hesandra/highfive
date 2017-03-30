const Sequelize = require('sequelize');
const db = require('../db/db');

const Industry = db.define('Industy', {
  createdAt: {
    type: Sequelize.DATE,
    defaultValue: Sequelize.NOW,
  },
  updatedAt: {
    type: Sequelize.DATE,
    defaultValue: Sequelize.NOW,
  },
  name: Sequelize.STRING,
});
