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

//companies
router.get('/companies', controller.companies.getAll);
router.get('/companies/:id', controller.companies.getById);
router.post('/companies', controller.companies.createOne);
router.put('/companies/:id', controller.companies.updateById);
router.delete('/companies/:id', controller.companies.deleteById);

//jobposts
router.get('/jobposts');
router.get('/jobposts/:id');
router.post('/jobpost', controller.companies.createOne);

//questions
router.get('/questions')
router.get('/api/questions', controller.questions.get);
router.post('/questions')

//videos
router.get('/videos')
router.post('/videos')

//locations
router.get('/locations')
router.post('/locations')

//industries
router.get('/industries')
router.post('/industries')

module.exports = router;

