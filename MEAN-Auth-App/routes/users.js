const express = require('express');
const router = express.Router();

//Register endpoint for user registration
//route to /register endpoint, console log for now
router.get('/register', (req, res, next) => {
    res.send('REGISTER ENDPOINT HAS BEN REACHED');
});
router.get('/authenticate', (req, res, next) => {
    res.send('AUTHENTICATE ENDPOINT HAS BEN REACHED');
});
router.get('/profile', (req, res, next) => {
    res.send('PROFILE ENDPOINT HAS BEN REACHED');
});
//validate route to see if token matches
router.get('/validate', (req, res, next) => {
    res.send('VALIDATE ENDPOINT HAS BEN REACHED');
});

module.exports = router;