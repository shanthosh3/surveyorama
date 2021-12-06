const router = require('express').Router();

//routes for each database
const userRoutes = require('./user-routes.js');
const surveyRoutes = require('./surveyroutes.js');
const questionRoutes = require('./questionroute.js');

//the routes to the page
router.use('/users', userRoutes);
router.use('/survey', surveyRoutes);
router.use('/question', questionRoutes);

module.exports = router;