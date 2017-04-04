const objection = require('objection');
const Company = require('./Company');
const Industry = require('./Industry');
const Jobpost = require('./Jobpost');
const Location = require('./Location');
const Question = require('./Question');
const Submission = require('./Submission');
const User = require('./User');
const Video = require('./Video');



module.exports = {
  users: {
    get: (cb) => {
      // grab all users here
      const fakeUser = JSON.stringify({ name: 'Josh' });
      cb(null, fakeUser);
    },
    getById: () => {
      // grab one user here
    },
    put: () => {
      // update user here
    },
    post: () => {
      // create a user here
    }
  }
};

