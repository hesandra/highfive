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
router.get('/api/companies/:id', controller.companies.getById);
router.post('/api/companies', controller.companies.createOne);
router.put('/api/companies/:id', controller.companies.updateCompany);
router.delete('/api/companies/:id', controller.companies.deleteCompany);

//jobposts
//create a jobpost by company id
router.post('/api/jobposts/company', controller.jobposts.createOne);

router.get('/api/jobposts', controller.jobposts.getAll);
//get jobposts by company id
router.get('/api/jobposts/company/:company_id', controller.jobposts.getAllCompanyPosts);

//update jobpost by jobpost id
//delete jobpost by jobpost id
router.put('/api/jobposts/company/:company_id/post/:post_id', controller.jobposts.updateCompanyPost);
router.delete('/api/jobposts/company/:post_id', controller.jobposts.deleteCompanyPost);

//grab jobposts by jobpost id
router.get('/api/jobposts/:id', controller.jobposts.getById);
//grab all jobposts
//figure out how to put timestamps in db
//for a jobpost, eagerly load all questions

//questions
//eager load all questions belonging to jobpost_id?
router.get('/api/questions', controller.questions.getAll);

//submissions
//get all submissions by jobpost id
//get one submission by submission id
//update submission by submission id
//submission by user id must be eager loaded with all videos
//post a submission by user id

//videos
//post a video

//locations
router.get('/api/locations', controller.locations.getAll)

//industries
router.get('/api/industries', controller.industries.getAll)

module.exports = router;

