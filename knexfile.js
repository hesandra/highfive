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
      host: process.env.RDS_HOSTNAME,
      database: process.env.RDS_DB_NAME,
      user: process.RDS_USERNAME,
      password: process.env.RDS_PASSWORD,
      port: process.env.RDS_PORT
    },
    seeds: {
      directory: `${__dirname}/seeds`
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }
};
