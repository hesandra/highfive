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
    post: (req, res, next) => {
      const { name, email, auth0_id, profile_img, github_url } = req.body;
      const user = req.body;

      models.users.post(user, (err, fetchedUser) => {
        console.log(fetchedUser, 'this was fetched');
        const payload = {
          success: err ? true : false,
          fetchedUser,
          err
        };
        res.status(201).end(JSON.stringify(payload));
      });
    },
    updateById: (req, res, next) => {
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
    createOne: async (req, res, next) => {
      // creates a company
      const formatted = {
        name: req.body.name,
        email: req.body.email,
        profile_img: req.body.profile_img,
        address: req.body.address,
        auth0_id: req.body.auth0_id,
      }

      const { name, email, auth0_id, profile_img } = req.body;

      models.companies.createOne(req.body, (err, fetchedCompany) => {
        const payload = {
          success: err ? true : false,
          fetchedCompany,
          err
        };
        res.status(201).end(JSON.stringify(payload));
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
    updateCompany: (req, res, next) => {
      console.log('req.body in index.js', req.body)
      console.log('req.params', req.params)
      const { id } = req.params;

      const formatted = {
        //id: parseInt(id),
        name: req.body.name,
        email: req.body.email,
        profile_img: req.body.profile_img,
        address: req.body.address,
        //auth0_id: req.body.auth0_id,
        industry_id: parseInt(req.body.industry_id),
        location_id: parseInt(req.body.location_id)
      };

      models.companies.updateCompany(id, formatted, (err, company) => {
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
        res.send(payload);
      });
    }
  },

  jobposts: {
    getAll: (req, res, next) => {
      models.jobposts.getAll((err, jobposts) => {
        const payload = {
          success: err ? false : true,
          err: JSON.stringify(err),
          jobposts
        };
        res.send(payload);
      });
    },
    getById: (req, res, next) => {
      const { id } = req.params;

      models.jobposts.getById(id, (err, jobpost) => {
        const payload = {
          success: err ? false : true,
          err: JSON.stringify(err),
          jobpost
        };
        res.send(payload)
      });
    },
    createOne: (req, res, next) => {

      var formatted = {
        title: req.body.title,
        level: req.body.level,
        description: req.body.description,
        company_id: parseInt(req.body.company_id)
      }

      models.jobposts.createOne(formatted, (err, jobposts) => {
        const payload = {
          success: err ? false : true,
          err: JSON.stringify(err),
          jobposts
        };
        res.send(payload)
      });
    },
    getJobPostsByCompany: (req, res, next) => {
      const { company_id } = req.params;

      models.jobposts.getJobPostsByCompany(company_id, (err, jobposts) => {
        const payload = {
          success: err ? false : true,
          err: JSON.stringify(err),
          jobposts
        };
        res.send(payload)
      });
    },
    updateJobPost: (req, res, next) => {

      var formatted = {
        id: parseInt(req.body.id),
        title: req.body.title,
        level: req.body.level,
        description: req.body.description,
        company_id: parseInt(req.body.company_id)
      }

      models.jobposts.updateCompanyPost(formatted, (err, jobposts) => {
        const payload = {
          success: err ? false : true,
          err: JSON.stringify(err),
          jobposts
        };
        res.send(payload)
      });
    },
    deleteJobPost: (req, res, next) => {
      const { post_id, company_id } = req.params;

      models.jobposts.deleteCompanyPost(post_id, company_id, (err, jobposts) => {
        const payload = {
          success: err ? false : true,
          err: JSON.stringify(err),
          jobposts
        };
        res.send(payload)
      });
    }
  },

  questions: {
    getAll: (req, res, next) => {
      models.questions.getAll((err, questions) => {
        const payload = {
          success: err ? false : true,
          err: JSON.stringify(err),
          questions
        }
        res.send(payload)
      });
    }, 
    getByPostId: (req, res, next) => {
      const { post_id } = req.params;

      models.questions.getByPostId(post_id, (err, questions) => {
        const payload = {
          success: err ? false : true,
          err: JSON.stringify(err),
          questions
        }
        res.send(payload)
      });
    }, 
    createOne: (req, res, next) => {
      
      const formatted = {
        type: req.body.type,
        level: parseInt(req.body.level),
        question: req.body.question,
        jobpost_id: parseInt(req.body.post_id)
      }

      models.questions.createOne(formatted, (err, questions) => {
        const payload = {
          success: err ? false : true,
          err: JSON.stringify(err),
          questions
        }
        res.send(payload)
      });
    },
    updateQuestion: (req, res, next) => {

      const formatted = {
        id: parseInt(req.body.q_id),
        type: req.body.type,
        level: parseInt(req.body.level),
        question: req.body.question,
        jobpost_id: parseInt(req.body.post_id)
      }

      models.questions.updateQuestion(formatted, (err, questions) => {
        const payload = {
          success: err ? false : true,
          err: JSON.stringify(err),
          questions
        }
        res.send(payload)
      });
    },
    deleteQuestion: (req, res, next) => {
      const { q_id } = req.params;

      models.questions.deleteQuestion(q_id, (err, questions) => {
        const payload = {
          success: err ? false : true,
          err: JSON.stringify(err),
          questions
        }
        res.send(payload)
      });
    }
  },
  
  videos: {
    getAll: (req, res, next) => {
      models.videos.getAll((err, videos) => {
        const payload = {
          success: err ? false : true,
          err: JSON.stringify(err),
          videos
        }
        res.send(payload)
      });
    },
    // getUserVideos: () => {

    // }
  },

  locations: {
    getAll: (req, res, next) => {
      models.locations.getAll((err, locations) => {
        const payload = {
          success: err ? false : true,
          err: JSON.stringify(err),
          locations
        }
        res.send(payload)
      });
    }
  },

  industries: {
    getAll: (req, res, next) => {
      models.industries.getAll((err, industries) => {
        const payload = {
          success: err ? false : true,
          err: JSON.stringify(err),
          industries
        }
        res.send(payload)
      });
    }
  }
};
