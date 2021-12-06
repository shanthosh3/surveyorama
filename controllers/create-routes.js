const router = require('express').Router();
const sequelize = require('../config/connection');
const { User, Survey, Question } = require('../models');
const withAuth = require('../utils/auth');

router.get('/:id', withAuth,(req, res) => {
    Survey.findOne({
        where: {
            id: req.params.id,
        },
        attributes: ['id', 'title'],
        include: {
            model: Question,
            attributes: ['id', 'title', 'choices']
        }
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