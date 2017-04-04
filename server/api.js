const objection = require('objection')

const Company = require('./models/Company')
const Industry = require('./models/Industry')
const Jobpost = require('./models/Jobpost')
const Location = require('./models/Location')
const Question = require('./models/Question')
const Submission = require('./models/Submission')
const User = require('./models/User')
const Video = require('./models/Video')

module.exports = function (app) {
  app.post('/test', function (req, res, next) {
    Person
      .query()
      .allowInsert('[pets, children.[pets, movies], movies, parent]')
      .insertGraph(req.body)
      .then(function (person) { res.send(person); })
      .catch(next);
  });

// The error thrown by this function is handled in the error handler middleware in app.js.
  function throwNotFound() {
    var error = new Error();
    error.statusCode = 404;
    throw error;
  }

}