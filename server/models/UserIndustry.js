// const db = require('../db/db');
const Sequelize = require('sequelize')
const User = require('./User')
const Industry = require('./Industry')

const User_Industry = db.define('User_Industry', {
  // createdAt: {
  //   type: Sequelize.DATE,
  //   defaultValue: Sequelize.NOW,
  // },
  // updatedAt: {
  //   type: Sequelize.DATE,
  //   defaultValue: Sequelize.NOW,
  // },
  user_id: Sequelize.INTEGER,
  industry_id: Sequelize.INTEGER,
});

User_Industry.hasOne(Industry)
User_Industry.hasOne(User)

User_Industry.sync()

module.exports = User_Industry;