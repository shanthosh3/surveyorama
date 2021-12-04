const router = require('express').Router();

const apiRoutes = require('./api');

router.use('/api', apiRoutes);

const dashboardRoutes = require('./dashboard-routes.js');
const loginRoutes =  require('./login-routes');
const createRoutes =  require('./create-routes');
const startRoutes = require('./start-routes');

router.use('/dashboard', dashboardRoutes);
router.use('/', loginRoutes)
router.use('/create', createRoutes);
router.use('/start', startRoutes);

router.use((req, res) => {
  res.status(404).end();
});

module.exports = router;