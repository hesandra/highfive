const Sequelize = require('sequelize');

const sequelize = new Sequelize('highfive', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',
  pool: {
    max: 5,
    min: 0,
    idle: 10000
  },
});


// const sequelize = new Sequelize('', {
//   host: 'localhost',
// });

module.exports = sequelize;