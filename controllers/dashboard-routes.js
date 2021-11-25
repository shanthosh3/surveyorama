const router = require('express').Router();
const sequelize = require('../config/connection');
const { User, Survey } = require('../models');

// get all surveys of the loggedin user
router.get('/', (req, res) => {
    Survey.findAll({
        where: {
            user_id: req.session.user_id
        },
        attributes: [
            'id',
            'title',
            'created_at'
        ]
    })
    .then(dbSurveyData => {
        // serialize data
        const surveys = dbSurveyData.map(survey => survey.get({ plain: true }));
        res.render('dashboard', { surveys, loggedIn: true });
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

module.exports = router;