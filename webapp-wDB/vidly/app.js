const Joi = require('joi');
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const getGenres = require('./GetGenres');

const app = express();
app.use(express.json());

app.get('/', (req, res) => {
    res.send('You have reached the root of this webserver!!');
    res.end();
});

app.get('/api/genres', (req, res) => {
    const result = getGenres();
    res.send(result);
});

const port = process.env.PORT || 3000;
app.listen(3000, () => {console.log(`You are now listening on server port:${port}`)})

