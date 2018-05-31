const mongoose = require('mongoose');
const Schema = mongoose.Schema;


var genreSchema = new Schema({
    genre: {
        type: String, 
        required: true
    }, 
    create_date: {
        type: Date,
        default: Date.now
    }
},);
const Genre = module.exports = mongoose.model('Genre', genreSchema);


function getGenres(callback, limit) {
    Genre.find(callback).limit(limit);
}; 

module.exports.getGenres = function getGenres(callback, limit) {
    Genre.find(callback).limit(limit); {
    }
}; 