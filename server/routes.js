const controller = require('./controllers');
const router = require('express').Router();
const path = require('path');

/**
 * USER ROUTES
 */
router.get('/users', controller.users.get);
router.get('/users/:id', controller.users.getById);





module.exports = router;

