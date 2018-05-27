const mongoose = require('mongoose');
const Schema = mongoos.Schema;

var movieSchema = new Schema({
    movieName: {type: String, required:true},
    movieDetails: {
        rating: String,
        length: String,
        releaseDate: Date,
        description: String,
        directors: [String],
        mainCast: [String],
        fullCast: [String],
        genre: {type: String, required:true},
        subGenres: [String],
        imbd_url: String,
    },
},{collection: 'movies' });

const Movies = module.exports = db1.model('Movies', movieSchema);

module.exports.getMovies = function (callback, limit){
    Movies.find(callback).limit(limit);
}