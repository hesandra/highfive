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

// companies
router.get('/api/companies/:id', controller.companies.getById);
router.post('/api/companies', controller.companies.createOne);
router.put('/api/companies/:id', controller.companies.updateCompany);
router.delete('/api/companies/:id', controller.companies.deleteCompany);

// jobposts
router.get('/api/jobposts/page/:page', controller.jobposts.getAllPage);
router.get('/api/jobposts', controller.jobposts.getAll);
router.get('/api/jobposts/:id', controller.jobposts.getById);
router.post('/api/jobposts', controller.jobposts.createOne);
router.get('/api/jobposts/company/:company_id', controller.jobposts.getJobPostsByCompany);
router.put('/api/jobposts/:id', controller.jobposts.updateJobPost);
router.delete('/api/jobposts/:id', controller.jobposts.deleteJobPost);

// submissions
router.get('/api/submissions', controller.submissions.getAll);
router.get('/api/submissions/:id', controller.submissions.getBySubmissionId);
router.get('/api/submissions/jobpost/:jobpost_id', controller.submissions.getAllForJobPost);
router.put('/api/submissions/:id', controller.submissions.updateSubmission);
router.get('/api/submissions/user/:id', controller.submissions.getAllByUserId);
router.post('/api/submissions', controller.submissions.createOne);
// router.get('/api/submissions/user/:user_id', controller.submissions.getByUserId);
// router.post('/api/submissions', controller.submissions.createOne);

// questions
router.get('/api/questions', controller.questions.getAll);

//videos
router.post('/api/videos', controller.videos.createOne);

// locations
router.get('/api/locations', controller.locations.getAll);

// industries
router.get('/api/industries', controller.industries.getAll);


module.exports = router;

