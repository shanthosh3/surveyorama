import express from 'express';

const router  = express.Router();

const users = [
    {
        username: "John",
        email: "john@test.com"
    }
];

// All routes will start with users.

router.get('/', (req, res) => {
    console.log(users);
    res.send(users);
});

router.post('/', (req, res) => {

}); 


export default router;