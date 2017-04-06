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
    post: async ({ name, email, auth0_id, profile_img, github_url }, cb) => {
      const user = {
        name,
        email,
        auth0_id,
        profile_img,
        github_url
      };
      const userAlreadyExists = await User.query().where(user);
      console.log(userAlreadyExists);
      if (!userAlreadyExists.length) {
        await User
          .query()
          .insertAndFetch(user)
          .then((insertedUser) => { cb(null, insertedUser); })
          .catch(err => console.log(err));
      } else {
        console.log('here yo');
        cb(null, userAlreadyExists[0]);
      }
    },
    updateById: async ({ location, linkedin_url, id }, cb) => {
      const user = await User
        .query()
        .patchAndFetchById(id, { location_id: location, linkedin_url })
        .where({ id })
        .then((usr) => cb(null, usr))
        .catch(e => cb(e, null));
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
  questions: { 
    get: (cb) => {
      Question
        .query()
        .then((questions) => { cb(null, questions) })
        .catch(err => { console.log(err) })
    }
 }
}

