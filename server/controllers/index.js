const models = require('../models');


module.exports = {
  users: {
    get: (req, res, next) => {
      
      // use node style callback, error first style
      models.users.get((err, users) => {
        if (err) {
          return next(err);
        }
        // respond back to client with users
        res.status(200).end(users);
      });
    },
    getById: (req, res, next) => {
      // grabs user by id

    },
    put: (req, res, next) => {
      // updates a user

    },
    post: (req, res, next) => {
      // creates a user

    }
  }
};
