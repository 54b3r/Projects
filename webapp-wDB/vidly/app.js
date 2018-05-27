const Joi = require('joi');
const express = require('express');
const bodyParser = require('body-parser');
const getGenre = require('./models/genre');
const Movies = require('./getMovies');


const app = express();
app.use(express.json());

app.get('/', (req, res) => {
    res.send('You have reached the root of this webserver!!');
    res.end();
});

// below is original code i had
app.get('/api/genres', (req, res) => {
    getGenre.find((err, genre) => {
        if(err) return res.status(400).send(err);
        res.json(genre)
        res.end;
    })

});
//new route
app.get('/api/genrestst', (req, res) => {  
    
    getGenre((err, genre) =>{
        if(err) {
            throw err;
        }
        res.send(JSON.stringify(genre))
    
    })
});
//MOVIE ROUTES
const movies = new Movies();

app.get('/api/movies', (req, res) => {   
    var result = movies.getMovies();
    console.log(result);
    res.json(result);

});
const port = process.env.PORT || 3000;
app.listen(port, () => {console.log(`Listening on server port:${port}`)})


