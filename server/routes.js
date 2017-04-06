const controller = require('./controllers');
const cors = require('cors');
const router = require('express').Router();
const path = require('path');

router.options('*', cors());
// users
router.get('/api/users', controller.users.get);
router.get('/api/users/:id', controller.users.getById);
router.put('/api/users/:id', controller.users.updateById);
router.post('/api/users', controller.users.post);

//companies
router.get('/api/companies', controller.companies.getAll);
router.get('/api/companies/:id', controller.companies.getById);
router.post('/api/companies', controller.companies.createOne);
router.put('/api/companies/:id', controller.companies.updateCompany);
router.delete('/api/companies/:id', controller.companies.deleteCompany);
// router.get('/api/companies/jobposts', controller.companies.getJobPosts)
// router.get('/api/companies/questions', controller.companies.getQuestions)

//jobposts
router.get('/api/jobposts');
router.get('/api/jobposts/:id');
router.post('/api/jobpost', controller.companies.createOne);

//questions
router.get('/api/questions')
router.get('/api/questions', controller.questions.get);
router.post('/api/questions')

//videos
router.get('/api/videos')
router.post('/api/videos')

//locations
router.get('/api/locations')
router.post('/api/locations')

//industries
router.get('/api/industries')
router.post('/api/industries')

module.exports = router;

