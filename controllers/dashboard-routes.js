const router = require('express').Router();
const sequelize = require('../config/connection');
const { User, Survey } = require('../models');
const withAuth = require('../utils/auth');


//routes to render dashboard page
// get all surveys of the loggedin user
router.get('/', withAuth, (req, res) => {
    Survey.findAll({
        where: {
            userID: req.session.user_id
        },
        attributes: [
            'id',
            'title',
            'created_at'
        ],
        include: {
            model: User,
            attributes: ['id', 'username']
        }
    })
    .then(dbSurveyData => {
        // serialize data
        const surveys = dbSurveyData.map(survey => survey.get({ plain: true }));
        const user = {
            username: req.session.username
        };
        res.render('dashboard', { user, surveys, loggedIn: true });
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

router.get('/create/:id', withAuth,(req, res) => {
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