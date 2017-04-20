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
      host: "aaqg7rdv187q13.cw5klf3vrg1i.us-west-2.rds.amazonaws.com",
      database: "ebdb",
      user: 'highfive',
      password: "highfive",
      port: "3306"
    },
    seeds: {
      directory: `${__dirname}/seeds`
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }
};
