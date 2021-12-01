const router = require('express').Router();
const sequelize = require('../config/connection');
const { User, Survey } = require('../models');

router.get('/:id', (req, res) => {
    Survey.findOne({
        id: req.params.id,
        attributes: ['id', 'title']
    })
    .then(dbSurveyData => {
        //serialize data
        const survey = dbSurveyData.get({ plain: true });
        res.render('create-survey', { survey, loggedIn: true })
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });

});

module.exports = router;