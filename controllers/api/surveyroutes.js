const router = require('express').Router();
const { Model } = require('sequelize/dist');
const { Question } = require('../../models');
const Survey = require('../../models/survey');
const User = require("../../models/user");
const withAuth = require('../../utils/auth');

// get API user's surveys
router.get('/', (req, res) => {
   Survey.findAll({
       attributes: ['id', 'title', 'created_at'],
       include: {
           model: Question,
           attributes: ['title', 'choices', 'surveyID']
       }
   }).then(dbSurveyData => res.json(dbSurveyData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

// im hitting my get survey route and i can see that i have seeded it but it is returning an empty array

// get survey by id ( 1 survey)
router.get('/:id', (req, res) => {
    Survey.findOne({
        where:{
            id: req.params.id
        },
        include:{
            model: User,
            attributes: ['username']
        }
    }).then(dbSurveyData => {
        if(!dbSurveyData){
            res.status(404).json({ message: 'There is no survey with this id'});
            return;
        }
        res.json(dbSurveyData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

// post API user's survey 
router.post('/', withAuth,(req, res) => {
    Survey.create({
        title: req.body.title,
        userID: req.session.user_id
    })
    .then(dbSurveyData => res.json(dbSurveyData))
    .catch(err=> {
        console.log(err);
        res.status(500).json(err);
    });
});

// Update API user's survey (PUT)
router.put('/:id', withAuth,(req, res) => {
    Survey.update(req.body, {
        individualHooks: true,
        where:{
            id: req.params.id
        }
    }).then(dbSurveyData => {
        if(!dbSurveyData[0]){
            res.status(404).json({ message:' No survey found with this id' });
            return;
        }
        res.json(dbSurveyData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

// Include the DELETE route ( DELETE API user survey ID)
router.delete('/:id', withAuth,(req, res) =>{
    Survey.destroy({
        where: { 
            id: req.params.id
        }
    }).then(dbSurveyData => {
        if(!dbSurveyData){
            res.status(404).json({ message: 'No Survey found with this id' });
            return;
            }
            res.json(dbSurveyData);
    }) .catch(err => {
        console.lof(err);
        res.status(500).json(err);
    });
});


module.exports = router;