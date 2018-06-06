//Creating a REST API w/ a MongoDB to support the Vidly project
const Joi = require('joi');
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();
app.use(express.json());

mongoose.connect('mongodb://127.0.0.1:27017/vidly-app');
const db = mongoose.connection;

db.on('err', console.error.bind(console, 'Connection error: ...'));
db.once('open', () => {
    console.log('Connection is successful:... ');

    const genreSchema = mongoose.Schema({
        genre: String,
    },{ collection: 'genres'});

    const Genre = mongoose.model('Genre',genreSchema,);
    //lets make a new genre
    const genre1 = new Genre({ 
        genre: "New-Genre-Test" 
    });

    genre1.save((err, genre) => {
        if(err) return console.error(err);
        console.log(genre.genre +": Was just saved to the genres collection");
    });
});

app.get('/', () => {
    console.log('This is the root of your: localhost webserver');
});
app.get('/api/genres', (req, res) => {
    const genre = {
        genre: req.body.genre
    };
    
    const { error } = Joi.validate(genre);
    if (error) return res.status(400).send(error.details[0].message);
    
    
    const genre = req.param.genre
    genre.find((err, genre) => {
        if (err) return res.send(err);
        res.json(genre); //should return all genres
    });

    const findRoute = router.route("/vidly-app");
    const json = {};

    findRoute.get( (req, res) => {
        genres.find( (err, genres) => {
            json.genres = genres

            res.json(json);

        }).sort("genre");
        
    });

});
//set the port to listen on for the web server
const port = process.env.PORT || 3000
app.listen(port, () => console.log(`Listening on port ${port}...`));

//console.log(indie.name);
//GET request to Root
//PUT Request to /api/genres
