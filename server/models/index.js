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
     * Posts a user to the db using async/await
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
        .eager('industry')
        .where(user);
      if (!userAlreadyExists.length) {
        await User
          .query()
          .allowEager('[industry]')
          .eager('industry')
          .insertAndFetch(user)
          .then((insertedUser) => { cb(null, insertedUser); })
          .catch(err => console.log(err));
      } else {
        console.log('here yo');
        cb(null, userAlreadyExists[0]);
      }
    },
    updateById: async ({ location, linkedin_url, id, industries }, cb) => {
      const industriesLength = industries.length;
      /* Patch User (async/await) */
      await User
        .query()
        .patchAndFetchById(id, { location_id: location, linkedin_url })
        .where({ id })
        .then((updatedUser) => {
          if (!industriesLength) {
            cb(null, updatedUser);
          }
        })
        .catch(e => cb(e, null));

      /* Patch User's industrys */
      await industries.map(async (industryId, index) => {
        const industry = await Industry
          .query()
          .findById(industryId);

        if (!industry) {
          console.log('no industry under that name');
          return;
        }
        await industry
          .$relatedQuery('user')
          .where({ user_id: id })
          .skipUndefined()
          .then((relationExists) => {
            if (relationExists.length) {
              if (index === industriesLength - 1) {
            console.log('already exists', relationExists);
            console.log(index, industriesLength);
                User
                  .query()
                  .findById(id)
                  .allowEager('[industry]')
                  .eager('industry')
                  .skipUndefined()
                  .then((updatedUser) => {
                    return cb(null, updatedUser);
                  });
              }
              console.log('industry already saved, skip');
              if (industriesLength === 1) {
                User
                  .query()
                  .findById(id)
                  .allowEager('[industry]')
                  .eager('industry')
                  .skipUndefined()
                  .then((updatedUser) => {
                    return cb(null, updatedUser);
                  });
              }
              return;
            }
            industry
              .$relatedQuery('user')
              .relate(id)
              .then(async (usrId) => {
                await User
                  .query()
                  .findById(usrId)
                  .allowEager('[industry]')
                  .eager('industry')
                  .skipUndefined()
                  .then((updatedUser) => {
                    if (index === industriesLength - 1) {
                      console.log('index', index);
                      cb(null, updatedUser);
                    }
                  });
              });
          });
      });
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
    post: async ({ name, email, auth0_id, profile_img }, cb) => {
      const company = {
        name,
        email,
        auth0_id,
        profile_img
       };
       console.log('company in compaines post', company);
      const companyAlreadyExists = await Company.query().where(company);
      console.log(companyAlreadyExists);
      if (!companyAlreadyExists.length) {
        await Company
          .query()
          .insertAndFetch(company)
          .then((insertedCompany) => { cb(null, insertedCompany); })
          .catch(err => console.log(err));
      } else {
        console.log('here yo');
        cb(null, companyAlreadyExists[0]);
      }
    },
/*    updateById: async ({ name, location, industry, profile_img }, cb) => {
      const company = await Company
        .query()
        .patchAndFetchById(id, { location, industry, profile_img })
        .where({ id })
        .then((company) => cb(null, usr))
        .catch(e => cb(e, null));
    }
  },*/
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
        .then((jobposts) => { cb(null, jobposts) })
        .catch( err => { console.log(err) })
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

