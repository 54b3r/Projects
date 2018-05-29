const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var movieSchema = new Schema({
    movieName: { type: String, required:true},
    rating: {type: String, required: true},
    length: String,
    releaseDate:{type: Date, required: true},
    description: String,
    directors: [{type: String, required: true}],
    mainCast: [{type: String, required: true}],
    fullCast: [String],
    genre: {type: String, required:true},
    subGenres: [String],
    imbd_url: String,
    
},{collection: 'movies' });

const Movies = module.exports = mongoose.model('Movies', movieSchema);{

    function getMovies() {Movies.getMovies((callback, limit) => {
        Movies.find(callback).limit(limit);   
    });
    function getMovieById() {Movies.getMovieById((id, callback) => {
        Movies.findById(id, callback);
    })};
    function addMovie() { Movies.addMovie((movie, callback) => {
        Movies.create(movie, callback);
    })};
    function updateMovie() {Movies.updateMovie((_id, movie, options) => {
        var query = {_id: _id};
        var update = {
            movieName: Movies.movieName,
            rating: Movies.rating,
            length: Movies.length,
            releaseDate: Movies.releaseDate,
            description: Movies.description,
            directors: Movies.directors,
            mainCast: Movies.mainCast,
            fullCast: Movies.fullCast,
            genre: Movies.genre,
            subGenres: Movies.subGenres,
            imbd_url: Movies.imbd_url,
        }
        Movies.findOneAndUpdate(query,update, options, callback);
    })}; 
    function deleteMovie() { Genre.deleteMovie((id, callback) => {
        var query = {_id: _id};
        Movies.remove(query, callback);
    })}; 
}}

module.exports = Movies;
