const router = require('express').Router();
const sequelize = require('../config/connection');

//login route
router.get('/login', (req, res) => {
    if (req.session.loggedIn) {
        res.redirect('/dashboard');
        return;
      }
    res.render('login');
  });

  module.exports = router