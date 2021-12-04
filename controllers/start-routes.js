const router = require('express').Router();
const sequelize = require('../config/connection');
const { User, Survey, Question } = require('../models');

router.get('/:id', (req, res) => {
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
        res.render('start-survey', { survey, loggedIn: true })
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });

});

module.exports = router;