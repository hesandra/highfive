const dotenv = require('dotenv');

dotenv.load();
module.exports = {
  development: {
    client: 'mysql',
    connection: {
      host: process.env.MYSQL_URI,
      database: process.env.MYSQL_DEV_DB,
      user: process.env.MYSQL_MASTER_USER,
      password: process.env.MYSQL_MASTER_PASS
    },
  },
  production: {
    client: 'mysql',
    connection: {
      host: process.env.MYSQL_PROD_URI,
      database: process.env.MYSQL_PROD_DB,
      user: process.env.MYSQL_PROD_USER,
      password: process.env.MYSQL_PROD_PASS,
      port: process.env.MYSQL_PROD_PORT
    },
    seeds: {
      directory: `${__dirname}/seeds`
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }
};
