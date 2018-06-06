const express = require('express');
const router = express.Router();
const User = require('../models/user');


//Register endpoint for user registration
//route to /register endpoint, console log for now
router.post('/register', (req, res, next) => {
    let newUser = new User({
        name: req.body.name,
        email: req.body.email,
        username: req.body.username,
        password: req.body.password
    })
    User.addUser(newUser, (err, user) => {
        if(err) {
            res.json({success: false, msg: 'Failed to register user'})
        } else {
            res.json({success: true, msg: 'You have successfully registered user'})
        }
        User.create(newUser)
    }) 
});
router.post('/authenticate', (req, res, next) => {
    res.send('AUTHENTICATE ENDPOINT HAS BEN REACHED');
});
router.get('/profile', (req, res, next) => {
    res.send('PROFILE ENDPOINT HAS BEN REACHED');
});

module.exports = router;