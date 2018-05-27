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

    function getMovies() {Genre.getMovies((callback, limit) => {
        Movies.find(callback).limit(limit);   
    });
    function getMovieById() {Genre.getMovieById((id, callback) => {
        Movies.findById(id, callback);
    })};
    function addBook() { Genre.addBook((book, callback) => {
        Genre.create(book, callback);
    })}; 
}}

module.exports = Movies;
