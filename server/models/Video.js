const Sequelize = require('sequelize');
const db = require('../db/db');

const Video = db.define('Video', {
  createdAt: {
    type: Sequelize.DATE,
    defaultValue: Sequelize.NOW,
  },
  updatedAt: {
    type: Sequelize.DATE,
    defaultValue: Sequelize.NOW,
  },
  href_video: Sequelize.STRING,
  notes: Sequelize.STRING,
  submission_id: Sequelize.INTEGER,
  question_id: Sequelize.INTEGER,
});
