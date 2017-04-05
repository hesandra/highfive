const models = require('../models');

module.exports = {
  users: {
    get: (req, res, next) => {
      models.users.get((err, users) => {
        console.log("get");
        const payload = {
          success: err ? false : true,
          err: JSON.stringify(err),
          users
        }
        res.send(payload)
      });
    },
    getById: (req, res, next) => {
      
    },
    put: (req, res, next) => {

    },
    post: (req, res, next) => {
      // creates a user
      const { name, email, auth0_id, profile_img } = req.body;
      const user = req.body;
      models.users.post(user, (err, id) => {
        console.log(id);
        const payload = {
          success: err ? true : false,
          id,
          err
        };
        res.status(201).end(JSON.stringify(payload));
      });
    }
  },
  company: {
    get: (req, res, next) => {
      models.company.get((err, company) => {
        const payload = {
          success: err ? false : true,
          err: JSON.stringify(err),
          company
        }
        res.send(payload)
      });
    },
    getById: (req, res, next) => {
      models.company.get((err, company) => {
        const payload = {
          success: err ? false : true,
          err: JSON.stringify(err),
          company
        }
        res.send(payload)
      });
    },
    getJobPosts: () => {
      models.company.get((err, jobposts) => {
        const payload = {
          success: err ? false : true,
          err: JSON.stringify(err),
          jobposts
        }
        res.send(payload)
      });
    }
  },


};
