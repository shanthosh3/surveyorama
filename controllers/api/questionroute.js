const router = require('express').Router();
// const withAuth = require('../../utils/auth');
const { User, Survey, Question } = require('../../models')
// get all questions for a single survey
router.get('/', (req, res) => {
    Question.findAll({
        attributes: ['id', 'title', 'choices'],
        include: {
            model: Survey,
            attributes: ['title', 'created_at']
        }
    })
    .then(dbQuestionData => res.json(dbQuestionData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

// get one question
router.get('/:id', (req, res) => {
    Question.findOne({
        where: {
            id: req.params.id
        },
        attributes: ['id', 'title', 'choices'],
        include: {
            model: Survey,
            attributes: ['title', 'created_at']
        }
    })
    .then(dbQuestionData => {
        if (!dbQuestionData) {
            res.status(404).json({ message: 'There is no question with this id'});
            return;
        }
        res.json(dbQuestionData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

// create (post) a question
router.post('/', (req, res) => {
    Question.create({
        title: req.body.title,
        choices: req.body.choices,
        surveyID: req.body.surveyID
    })
    .then(dbQuestionData => res.json(dbQuestionData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

// update question
router.put('/:id', (req, res) => {
    Question.update(req.body, {
        where: {
            id: req.params.id
        }
    })
    .then(dbQuestionData => {
        if (!dbQuestionData) {
            res.status(404).json({ message: 'There is no question with this id' });
            return;
        }
        res.json(dbQuestionData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

// delete question
router.delete('/:id', (req, res) => {
    Question.destroy({
        where: {
            id: req.params.id
        }
    })
    .then(dbQuestionData => {
        if (!dbQuestionData) {
            res.status(404).json({ message: 'There is no question with this id' });
            return;
        }
        res.json(dbQuestionData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

module.exports = router;