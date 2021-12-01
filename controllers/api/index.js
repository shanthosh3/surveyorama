const router = require('express').Router();

const userRoutes = require('./user-routes.js');
const surveyRoutes = require('./surveyroutes.js');
const questionRoutes = require('./questionroute.js');

router.use('/users', userRoutes);
router.use('/survey', surveyRoutes);
router.use('/question', questionRoutes);

module.exports = router;