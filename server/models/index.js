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
    post: () => {
      // create a user here
      
    }
  },
  company: {
    get: (cb) => {
      Company
        .query()
        .then((companies) => { cb(null, companies) })
        .catch(err => { console.log(err) })
    },
    getById: (cb) => {
      Company
        .query()
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

    }
  },


};

