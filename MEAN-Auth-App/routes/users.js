const express = require('express');
const router = express.Router();

//Register endpoint for user registration
//route to /register endpoint, console log for now
router.get('/register', (req, res, next) => {
    res.json('REGISTER ENDPOINT HAS BEN REACHED');
});