const express = require('express');
const { User } = require('../../models');
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
    console.log('POST ROUTE RECEIVED');

    res.send('POST ROUTE RECEIVED');
}); 


module.exports = router;