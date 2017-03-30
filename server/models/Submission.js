const Sequelize = require('sequelize');
const db = require('../db/db');

const Submission = db.define('Submission', {
  createdAt: {
    type: Sequelize.DATE,
    defaultValue: Sequelize.NOW,
  },
  updatedAt: {
    type: Sequelize.DATE,
    defaultValue: Sequelize.NOW,
  },
  status: Sequelize.INTEGER,
  user_id: Sequelize.INTEGER,
  jobposts: Sequelize.INTEGER,
});