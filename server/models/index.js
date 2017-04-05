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
    post: async ({ name, email, auth0_id, profile_img }, cb) => {
      const user = {
        name,
        email,
        auth0_id,
        profile_img
      };
      const userAlreadyExists = await User.query().where(user);
      if (!userAlreadyExists.length) {
        await User
          .query()
          .insert(user)
          .then((insertedUser) => { cb(insertedUser, null); })
          .catch(err => console.log(err));
      }
    }
  },
  company: {
    get: (cb) => {
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
    getJobPosts: (cb) => {
      Company
        .query()
        .then((jobposts) => { cb(null, jobposts) })
        .catch(err => { console.log(err) })
    },
    post: () => {
      
    },
    put: () => {

      // const person = await User
      //   .query()
      //   .then((users) => { console.log(users); });
    }
  },


};

