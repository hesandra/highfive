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
      const { id } = req.params;

      models.companies.updateCompany(id, req.body, (err, company) => {
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

      models.jobposts.createOne(req.body, (err, jobposts) => {
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
        res.send(payload);
      });
    },
    updateJobPost: (req, res, next) => {
      const { id } = req.params;
      models.jobposts.updateJobPost(id, req.body, (err, jobposts) => {
        const payload = {
          success: err ? false : true,
          err: JSON.stringify(err),
          jobposts
        };
        res.send(payload);
      });
    },
    deleteJobPost: (req, res, next) => {
      const { id } = req.params;

      models.jobposts.deleteJobPost(id, (err, jobposts) => {
        const payload = {
          success: err ? false : true,
          err: JSON.stringify(err),
          jobposts
        };
        res.send(payload);
      });
    }
  },

  // submissions: {
    // createOne: (req, res, next) => {
    //   models.submissions.createOne(req.body, (err, submission) => {
    //     const payload = {
    //       success: err ? false : true,
    //       err: JSON.stringify(err),
    //       submission
    //     }
    //     res.send(payload)
    //   });
    // },
    // getByUserId: (req, res, next) => {
    //   const { user_id } = req.params;

    //   models.submissions.getByUserId(user_id, (err, submission) => {
    //     const payload = {
    //       success: err ? false : true,
    //       err: JSON.stringify(err),
    //       submission
    //     }
    //     res.send(payload)
    //   });
    // }
  // },
  submissions: {
    getAllByCompanyId: (req, res, next) => {
      models.submissions.getAllByCompanyId((err, submissions) => {
        const payload = {
          success: err ? false : true,
          submissions,
          err
        };
        res.status(200).send(JSON.stringify(payload));
      });
    },
    getAll: (req, res, next) => {
      models.submissions.getAll((err, submissions) => {
        const payload = {
          success: err ? false : true,
          submissions,
          err
        };
        res.status(200).send(JSON.stringify(payload));
      });
    },
    getBySubmissionId: (req, res, next) => {
      const { id } = req.params;

      models.submissions.getBySubmissionId(id, (err, submission) => {
        const payload = {
          success: err ? false : true,
          err: JSON.stringify(err),
          submission
        };
        res.send(payload);
      });
    },
    getAllForJobPost: (req, res, next) => {
      const { jobpost_id } = req.params;

      models.submissions.getAllForJobPost(jobpost_id, (err, submission) => {
        const payload = {
          success: err ? false : true,
          err: JSON.stringify(err),
          submission
        }
        res.send(payload)
      });
    },
    updateSubmission: (req, res, next) => {
      const { id } = req.params;

      models.submissions.updateSubmission(id, req.body, (err, submission) => {
        const payload = {
          success: err ? false : true,
          err: JSON.stringify(err),
          submission
        }
        res.send(payload)
      });
    },
    getAllByUserId: (req, res, next) => {
      const { id } = req.params;
      models.submissions.getAllByUserId(id, (err, submissions) => {
        const payload = {
          success: err ? false : true,
          submissions,
          err
        };
        res.status(200).send(JSON.stringify(payload));
      });
    },
    createOne: (req, res, next) => {
      console.log(req.body);
      models.submissions.createOne(req.body, (err, submission) => {
        const payload = {
          success: err ? false : true,
          submission,
          err
        };
        res.status(201).send(JSON.stringify(payload));
      });
    }
  },
  
  videos: {
    createOne: (req, res, next) => {
      models.videos.createOne(req.body, (err, video) => {
        const payload = {
          success: err ? false : true,
          err: JSON.stringify(err),
          video
        }
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
        res.send(payload);
      });
    }
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
