const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
app.use(express.json());
//app.use(bodyParser.json());
//app.use(bodyParser.urlencoded({extended: true}));

mongoose.connect('mongodb://127.0.0.1:27017/vidly-app')
const db = mongoose.connection;

const Genre = require('./genre');
const Movies = require('./movie');

app.get('/', (req, res) => {
    res.send('You have reached the root of this webserver!!');
    res.end();
});

app.get('/api/genres', (req, res) => {
    Genre.find((err, genre) => {
        if(err) {
            throw err;
        }
        res.json(genre);
    })

});

app.get('/api/genres/:_id', (req, res) => { 
    Genres.findById(req.params._id ,(err, genre) => {
        if(err){
            throw err;
        };
        res.json(genre)
    })
});

app.post('/api/genres', (req, res) => {
    var genre = req.body;
    Genre.create(genre, (err, genre) => {
        if(err) {
            throw err;
        }
        res.send(JSON.stringify(genre));
    })
});

app.get('/api/movies', (req, res) => {   
    Movies.find((err, movies) => {
        if(err){
            throw err;
        };
        res.json(movies)
    })
});

app.get('/api/movies/:_id', (req, res) => { 
    Movies.findById(req.params._id ,(err, movie) => {
        if(err){
            throw err;
        };
        res.json(movie)
    })
});

app.post('/api/movies', (req, res) => {
    var movie = req.body;
    Movies.create(movie, (err, movie) => {
        if(err) {
            throw err;
        }
        res.send(JSON.stringify(movie));
    })
});

const port = process.env.PORT || 3000;
app.listen(port, () => {console.log(`Listening on server port:${port}`)})