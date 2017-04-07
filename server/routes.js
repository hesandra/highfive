const controller = require('./controllers');
const cors = require('cors');
const router = require('express').Router();
const path = require('path');

router.options('*', cors());
// users
router.get('/api/users', controller.users.get);
router.post('/api/users', controller.users.post);
router.get('/api/users/:id', controller.users.getById);
router.put('/api/users/:id', controller.users.updateById);
router.delete('/api/users/:id/industry/:industryId', controller.users.deleteIndustryById);

//companies
router.get('/api/companies', controller.companies.getAll);
router.get('/api/companies/:id', controller.companies.getById);
router.post('/api/companies', controller.companies.createOne);
router.put('/api/companies/:id', controller.companies.updateCompany);
router.delete('/api/companies/:id', controller.companies.deleteCompany);

//jobposts
router.get('/api/jobposts', controller.jobposts.getAll);
router.get('/api/jobposts/:id', controller.jobposts.getById);
router.post('/api/jobposts/:company_id', controller.jobposts.createOne)
router.get('/api/jobposts/:company_id', controller.jobposts.getAllCompanyJobs)
router.get('/api/jobposts/:post_id/:company_id', controller.jobposts.getCompanyPostById)

//questions

//eager load all questions belonging to jobpost_id?
// router.get('/api/questions', controller.questions.getAll);
// router.get('/api/questions/:job_id', controller.questions.getByJobId);
// router.post('/api/questions/:job_id', controller.questions.createOne);

//videos
// router.get('/api/videos/', controller.videos.getAll)
// router.get('/api/videos/:user_id', controller.videos.getUserVideos)
// router.post('/api/videos/:question_id', controller.videos.createOne)

//locations
// router.get('/api/locations')
// router.post('/api/locations')

//industries
// router.get('/api/industries')
// router.post('/api/industries')

module.exports = router;

