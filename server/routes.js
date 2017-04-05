const controller = require('./controllers');
const router = require('express').Router();
const path = require('path');

//users
router.get('/users', controller.users.get);
router.get('/users/:id', controller.users.getById);
router.post('/users', controller.users.post);

//companies
router.get('/companies', controller.company.get);
router.get('/companies/:id', controller.company.getById);

//jobposts
router.get('/companies/:id/jobposts')
//get jobpost by userid

//questions
// router.get('/')
// router.get('/')

//videos
// router.get('/')
// router.get('/')

//location, industry?

module.exports = router;

