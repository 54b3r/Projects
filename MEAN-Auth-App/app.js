const express = require('express');
const path = require('path');
const bodyParsder = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const mongoose = require('mongoose');  
const config = require('./config/database');

//Conect to DB
mongoose.connect(config.database);
//let us konw we are connected 
mongoose.connection.on('connected', () => {
    console.log(`Connected to database: ${config.database}`);
});
//let us low if there is an error
mongoose.connection.on('error', (err) => {
    console.log(`Database Error: ${err}`);
});
const app = express();
const users = require('./routes/users');
//CORS middleware
app.use(cors());

//set the static folder for our angular 2 app
app.use(express.static(path.join(__dirname, 'client')));

//Body Parser Middleware
app.use(bodyParsder.json())

//says anything passes to /users/xxx endpoint will go 2 that users file
app.use('/users', users);

const port = process.env.PORT || 3000

//Index Route
app.get('/', (req, res) => {
    res.json('invalid endpoint!!');
});

//Start Server on port
app.listen(port, () => {
    console.log(`Listening on port: ${port}`)
});

