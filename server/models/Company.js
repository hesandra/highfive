// const db = require('../db/db');
const Sequelize = require('sequelize')

const Jobpost = require('./Jobpost')
const Industry = require('./Industry')
const Location = require('./Location')

const Company = db.define('Company', {
  // createdAt: {
  //   type: Sequelize.DATE,
  //   defaultValue: Sequelize.NOW,
  // },
  // updatedAt: {
  //   type: Sequelize.DATE,
  //   defaultValue: Sequelize.NOW,
  // },
  // id: {type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true},
  name: Sequelize.STRING,
  profile_img: Sequelize.STRING,
  industry: Sequelize.INTEGER,
  location: Sequelize.INTEGER,
  email: Sequelize.STRING,
  address: Sequelize.STRING
});

Company.belongsTo(Industry)
Company.hasOne(Jobpost)
Company.hasOne(Location)

Company.sync()

module.exports = Company;