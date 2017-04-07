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
    updateById: (req, res, next) => {
      console.log('here');
      const { location, linkedin_url, industries } = req.body;
      const { id } = req.params;
      const data = {
        id,
        location,
        industries,
        linkedin_url
      };
      models.users.updateById(data, (err, user) => {
        console.log(user, ' this is user');
        const payload = {
          success: err ? false : true,
          user,
          err
        };
        res.status(201).send(JSON.stringify(payload));
      });
    },
    deleteIndustryById: (req, res, next) => {
      console.log(req.params);
      models.users.deleteIndustryById(req.params, (err, user) => {
        const payload = {
          success: err ? false : true,
          user,
          err
        };
        res.status(201).send(JSON.stringify(payload));
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
    updateCompany: (req, res, next) => {
      const body = req.body;

      models.companies.updateCompany(body, (err, company) => {
        const payload = {
          success: err ? false : true,
          err: JSON.stringify(err),
          company
        }
        res.send(payload)
      });
    },
    deleteCompany: (req, res, next) => {
      const { id } = req.params;

      models.companies.deleteCompany(id, (err, company) => {
        const payload = {
          success: err ? false : true,
          err: JSON.stringify(err),
          company
        };
        res.send(payload)
      });
    },
    getJobPosts: (req, res, next) => {
      const { id } = req.params; 
      
      models.companies.getJobPosts(id, (err, companyPosts) => {
        const payload = {
          success: err ? false : true,
          err: JSON.stringify(err),
          companyPosts
        };
        res.send(payload)
      });
    }
  },

  jobposts: {
    getAll: (req, res, next) => {
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
    createOne: (req, res, next) => {
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
    getPostQuestions: (req, res, next) => {
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
