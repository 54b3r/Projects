const Joi = require('joi');
const express = require('express');
const bodyParser = require('body-parser');
const Genres = require('./models/test2');
const Movies = require('./models/test');
//const Test = require('./models/test');

const app = express();
app.use(express.json());

app.get('/', (req, res) => {
    res.send('You have reached the root of this webserver!!');
    res.end();
});

// below is original code i had
app.get('/api/genres', (req, res) => {
    getGenre((err, genre) => {
        if(err) {
            throw err;
        }
        return res.json(genre);
    })

});
//new route
app.get('/api/genrestst', (req, res) => {  
    getGenre((err, genre) =>{
        if(err) {
            throw err;
        }
        res.json(genre);
    
    })
});
//MOVIE ROUTES
const movies = new Movies();

app.get('/api/movies', (req, res) => {   
    movies.getMovies();
    console.log(movies.getMovies());
    res.send(JSON.stringify(movies.getMovies));
});
app.get('/api/movies2', (req, res) => {
        const result = getMoviesQuery()
        res.send(result);
});

const port = process.env.PORT || 3000;
app.listen(port, () => {console.log(`Listening on server port:${port}`)})


