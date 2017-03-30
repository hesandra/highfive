// const db = require('../db/db');
const Sequelize = require('sequelize')
const Company = require('./Company')
const User_Industry = require('./UserIndustry')

const Industry = db.define('Industy', {
  // createdAt: {
  //   type: Sequelize.DATE,
  //   defaultValue: Sequelize.NOW,
  // },
  // updatedAt: {
  //   type: Sequelize.DATE,
  //   defaultValue: Sequelize.NOW,
  // },
  name: Sequelize.STRING,
});

Industry.hasOne(Company)
Industry.hasOne(User_Industry)

Industry.sync()

module.exports = Industry;