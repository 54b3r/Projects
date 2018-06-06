const express = require('express');
const path = require('path');
const bodyParsder = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const mongoose = require('mongoose');

const app = express();
//CORS middleware
app.use(cors());
//Body Parser Middleware
app.use(bodyParsder.json())

const port = process.env.PORT || 3000

//Index Route
app.get('/', (req, res) => {
    res.json('invalid endpoint!!');
});

//Start Server on port
app.listen(port, () => {
    console.log(`Listening on port: ${port}`)
});

