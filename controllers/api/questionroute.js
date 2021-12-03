const router = require('express').Router();
const withAuth = require('../../utils/auth');
const { Survey, Question } = require('../../models');

// get all questions for a single survey
router.get('/:surveyID/', (req, res) => {
    Question.findAll({
        where: {
            surveyID: req.params.surveyID
        },
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
router.post('/', withAuth, (req, res) => {
    Question.create({
        title: req.body.title,
        choices: req.body.choices
    })
    .then(dbQuestionData => res.json(dbQuestionData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

// update question
router.put('/:id', withAuth, (req, res) => {
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
router.delete('/:id', withAuth, (req, res) => {
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