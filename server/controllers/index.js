const models = require('../models');

module.exports = {
  users: {
    get: (req, res, next) => {
      models.users.get((err, users) => {
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
      const { id } = req.params;

      models.company.getById(id, (err, company) => {
        const payload = {
          success: err ? false : true,
          err: JSON.stringify(err),
          company
        }
        res.send(payload)
      });
    },
    getJobPosts: (req, res, next) => {
      models.company.getJobPosts((err, jobposts) => {
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
