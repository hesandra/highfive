const models = require('../models');

module.exports = {

  users: {
    get: (req, res, next) => {
      models.users.get((err, users) => {
        const payload = {
          success: err ? false : true,
          err: JSON.stringify(err),
          users
        };
        res.send(payload);
      });
    },
    getById: (req, res, next) => {

    },
    put: (req, res, next) => {

    },
    post: async (req, res, next) => {
      // creates a user
      const { name, email, auth0_id, profile_img, github_url } = req.body;
      const user = req.body;

      models.users.post(user, (err, fetchedUser) => {
        console.log('id should be here', fetchedUser);
        const payload = {
          success: err ? true : false,
          fetchedUser,
          err
        };
        res.status(201).end(JSON.stringify(payload));
      });
    },
    updateById: async (req, res, next) => {
      const { location, linkedin_url } = req.body;
      const { id } = req.params;
      console.log(req.params);
      console.log(req.body);
      const data = {
        id,
        location,
        linkedin_url
      };
      models.users.updateById(data, (err, user) => {
        const payload = {
          success: err ? false : true,
          user,
          err
        };
        res.status(201).send(JSON.stringify(user));
      });
    }
  },

  companies: {
    getAll: (req, res, next) => {
      models.companies.getAll((err, company) => {
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

      models.companies.getById(id, (err, company) => {
        const payload = {
          success: err ? false : true,
          err: JSON.stringify(err),
          company
        }
        res.send(payload)
      });
    },
    createOne: (req, res, next) => {
      const body = req.body;

      models.companies.createOne(body, (err, company) => {
        const payload = {
          success: err ? false : true,
          err: JSON.stringify(err),
          company
        }
        res.send(payload)
      });
    },
    updateById: (req, res, next) => {
      const { id } = req.params;

      models.companies.updateById(id, (err, company) => {
        const payload = {
          success: err ? false : true,
          err: JSON.stringify(err),
          company
        }
        res.send(payload)
      });
    },
    deleteById: (req, res, next) => {
      const { id } = req.params;

      models.companies.deleteById(id, (err, company) => {
        const payload = {
          success: err ? false : true,
          err: JSON.stringify(err),
          company
        };
        res.send(payload)
      });
    }
  },

  jobposts: {
    get: (req, res, next) => {
      models.jobposts.get((err, jobposts) => {
        const payload = {
          success: err ? false : true,
          err: JSON.stringify(err),
          jobposts
        }
        res.send(payload)
      });
    },
    getById: (req, res, next) => {
      const { id } = req.params;

      models.jobposts.getById(id, (err, jobposts) => {
        const payload = {
          success: err ? false : true,
          err: JSON.stringify(err),
          jobposts
        };
        res.send(payload)
      });
    },
  },

  //questions
  questions: {
    get: (req, res, next) => {
      models.questions.get((err, questions) => {
        const payload = {
          success: err ? false : true,
          err: JSON.stringify(err),
          questions
        }
        res.send(payload)
      });
    }, 
  },
  
  //videos
  videos: {

  },

  //locations
  locations: {

  },

  //industries
  industries: {

  }
};
