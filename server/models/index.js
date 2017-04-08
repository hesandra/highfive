const objection = require('objection');
const Company = require('./Company');
const Industry = require('./Industry');
const Jobpost = require('./Jobpost');
const Location = require('./Location');
const Question = require('./Question');
const User = require('./User');
const Video = require('./Video');

module.exports = {
  users: {
    get: (cb) => {
      User
        .query()
        .allowEager('[industry]')
        .eager('industry')
        .skipUndefined()
        .then((users) => { cb(null, users) })
        .catch(err => { console.log(err) })
    },
    getById: () => {

    },
    put: () => {
      // update user here
    },
    /**
     * Posts a user to the db using async/await (Ready for Testing)
     */
    post: async ({ name, email, auth0_id, profile_img, github_url }, cb) => {
      const user = {
        name,
        email,
        auth0_id,
        profile_img,
        github_url
      };
      const userAlreadyExists = await User
        .query()
        .allowEager('[industry]')
        .first()
        .eager('industry')
        .where(user);

      if (!userAlreadyExists) {
        const newUser = await User
          .query()
          .allowEager('[industry]')
          .eager('industry')
          .insertAndFetch(user)
          .catch((err) => {
            return cb(err, null);
          });
        cb(null, newUser);
      } else {
        cb(null, userAlreadyExists);
      }
    },
    updateById: async ({ location, linkedin_url, id, industries }, cb) => {
      const industriesLength = industries.length;
      /* Patch User (async/await) */
      const updatedUser = await User
        .query()
        .patchAndFetchById(id, { location_id: location, linkedin_url })
        .first()
        .catch((e) => {
          return cb(e, null);
        });

      if (!industriesLength) {
        cb(null, updatedUser);
      }

      if (industriesLength) {
      /* Patch User's industrys */
        industries.map(async (industryId, index) => {
          const industry = await Industry
            .query()
            .findById(industryId);

          if (!industry) {
            console.log('no industry under that name');
            return;
          }
          const relationExists = await industry
            .$relatedQuery('user')
            .where({ user_id: id })
            .first()
            .skipUndefined()

          if (relationExists) {
            if (index === industriesLength - 1) {
              console.log('already related, skip');
              console.log(index, industriesLength);
              const userToReturn = await User
                .query()
                .findById(id)
                .allowEager('[industry]')
                .eager('industry')
                .skipUndefined()
                .catch((e) => {
                  return cb(e, null);
                });
              cb(null, userToReturn);
            }
          } else {
            const industryToRelate = await industry
              .$relatedQuery('user')
              .relate(id)
              .catch((e) => {
                cb(e, null);
              });
            const userToReturn = await User
              .query()
              .findById(id)
              .allowEager('[industry]')
              .eager('industry')
              .skipUndefined()
              .catch((e) => {
                return cb(e, null);
              });

            cb(null, userToReturn);
          }

          // .then((relationExists) => {
          //   if (relationExists.length) {
          //     if (index === industriesLength - 1) {
          //   console.log('already exists', relationExists);
          //   console.log(index, industriesLength);
          //       User
          //         .query()
          //         .findById(id)
          //         .allowEager('[industry]')
          //         .eager('industry')
          //         .skipUndefined()
          //         .then((updatedUser) => {
          //           return cb(null, updatedUser);
          //         });
          //     }
          //     console.log('industry already saved, skip');
          //     if (industriesLength === 1) {
          //       User
          //         .query()
          //         .findById(id)
          //         .allowEager('[industry]')
          //         .eager('industry')
          //         .skipUndefined()
          //         .then((updatedUser) => {
          //           return cb(null, updatedUser);
          //         });
          //     }
          //     return;
          //   }
            // industry
            //   .$relatedQuery('user')
            //   .relate(id)
            //   .then(async (usrId) => {
            //     await User
            //       .query()
            //       .findById(usrId)
            //       .allowEager('[industry]')
            //       .eager('industry')
            //       .skipUndefined()
            //       .then((updatedUser) => {
            //         if (index === industriesLength - 1) {
            //           console.log('index', index);
            //           cb(null, updatedUser);
            //         }
            //       });
            //   });
          // });
      });
      }
    },
    deleteIndustryById: async ({ id, industryId }, cb) => {
      await User
        .query()
        .where('id', id)
        .first()
        .then((user) => {
          return user
            .$relatedQuery('industry')
            .unrelate()
            .where('id', industryId)
            .catch(e => cb(e, null));
        })
        .then(() => {
          User
            .query()
            .allowEager('[industry]')
            .eager('industry')
            .where('id', id)
            .first()
            .then((updatedUser) => {
              cb(null, updatedUser);
            })
            .catch(err => cb(err, null));
        })
        .catch(e => cb(e, null));
    }
  },
  companies: {
    getAll: (cb) => {
      Company
        .query()
        .then((companies) => { cb(null, companies) })
        .catch(err => { console.log(err) })
    },
    getById: (id, cb) => {
      Company
        .query()
        .where('id', id)
        .then((company) => { cb(null, company) })
        .catch(err => { console.log(err) })
    },
    createOne: (body, cb) => {
      Company
        .query()
        .insertAndFetch(body)
        .then((company) => { cb(null, company) })
        .catch(err => { console.log(err) })
    },
    updateCompany: (body, cb) => {
      Company
        .query()
        .update(body)
        .where('id', body.id)
        .then((company) => { cb(null, company) })
        .catch(err => { console.log(err) })
    },
    deleteCompany: (id, cb) => {
      Company
        .query()
        .deleteById(id)
        .then((deleted) => { cb(null, deleted) })
        .catch(err => { console.log(err) })
    }
  },

  jobposts: {
    getAll: (cb) => {
      Jobpost
        .query()
        .allowEager('[company]')
        .eager('company')
        .then((jobposts) => { cb(null, jobposts); })
        .catch((err) => { 
          cb(err, null);
        });
    },
    getById: (id, cb) => {
      Jobpost
        .query()
        .where('id', id)
        .then((jobposts) => { cb(null, jobposts) })
        .catch( err => { console.log(err) })
    },
    createOne: (body, cb) => {
      Jobpost
        .query()
        .insertAndFetch(body)
        .then((jobs) => { cb(null, jobs) })
        .catch( err => { console.log(err) })
    },
    getAllCompanyPosts: (companyId, cb) => {
      Jobpost
        .query()
        .where('company_id', companyId)
        .then((jobs) => { cb(null, jobs) })
        .catch( err => { console.log(err) })
    },
    getCompanyPostById: (postId, companyId, cb) => {
      Jobpost
        .query()
        .where('id', postId)
        .where('company_id', companyId)
        .then((jobs) => { cb(null, jobs) })
        .catch( err => { console.log(err) })
    },
    deleteCompanyPost: (postId, companyId, cb) => {
      Jobpost
        .query()
        .deleteById(postId)
        .where('company_id', companyId)
        .then((jobs) => { cb(null, jobs) })
        .catch( err => { console.log(err) })
    },
    updateCompanyPost: (body, cb) => {
      Jobpost
        .query()
        .update(body)
        .where('id', body.id)
        .then((jobs) => { cb(null, jobs) })
        .catch( err => { console.log(err) })
    }
  },

  questions: { 
    getAll: (cb) => {
      Question
        .query()
        .then((questions) => { cb(null, questions) })
        .catch(err => { console.log(err) })
    },
    getByPostId: (id, cb) => {
      Question
        .query()
        .where('jobpost_id', id)
        .then((questions) => { cb(null, questions) })
        .catch(err => { console.log(err) })
    },
    createOne: (body, cb) => {
      Question
        .query()
        .insertAndFetch(body)
        .then((question) => { cb(null, question) })
        .catch( err => { console.log(err) })
    },
    updateQuestion: (body, cb) => {
      Question
        .query()
        .update(body)
        .where('id', body.id)
        .then((question) => { cb(null, question) })
        .catch( err => { console.log(err) })
    },
    deleteQuestion: (q_id, cb) => {
      Question
        .query()
        .deleteById(q_id)
        .then((question) => { cb(null, question) })
        .catch( err => { console.log(err) })
    }
  },

  videos: {
    getAll: (cb) => {
      Video
        .query()
        .then((videos) => { cb(null, videos) })
        .catch( err => { console.log(err) })
    },
    getUserVideos: () => {
      
    }
  },
  locations: {
    getAll: (cb) => {
      Location
        .query()
        .then((location) => { cb(null, location) })
        .catch( err => { console.log(err) })
    }
  },

  industries: {
    getAll: (cb) => {
      Industry
        .query()
        .then((industry) => { cb(null, industry) })
        .catch( err => { console.log(err) })
    }
  }

};

