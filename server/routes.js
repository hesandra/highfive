const controller = require('./controllers');
const cors = require('cors');
const router = require('express').Router();
const path = require('path');

router.options('*', cors());
// users
router.get('/users', controller.users.get);
router.get('/users/:id', controller.users.getById);
router.put('/users/:id', controller.users.updateById);
router.post('/users', controller.users.post);

// companies
router.get('/companies', controller.company.get);
router.get('/companies/:id', controller.company.getById);

// jobposts
router.get('/companies/:id/jobposts');
// get jobpost by userid

// questions
// router.get('/')
//questions
router.get('/api/questions', controller.questions.get);
// router.get('/')

// videos
// router.get('/')
// router.get('/')

// location, industry?

module.exports = router;

