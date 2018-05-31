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
    },
}, {collection: 'genres'});

const Genre = module.exports = mongoose.model('Genre', genreSchema);{
    function getGenres() {Genre.getGenres((callback, limit) => {
        Genre.find(callback).limit(limit);  
    }); 
    function getGenreById() { Genre.getGenreById((id, callback) => {
        Genre.findById(id, callback);
    })};
    function addGenre() { Genre.addGenre((genre, callback) => {
        Genre.create(genre, callback);
    })};
    function updateGenre() {Genre.updateGenre((_id, genre, options, callback) => {
        var query = {_id: _id};
        var update = {
            genre: Genre.genre,
        } 
        Genre.findOneAndUpdate(query,update, options, callback); 
    })};  
    function deleteGenre() { Genre.deleteGenre((id, callback) => {
        var query = {_id: _id};
        Genre.remove(query, callback);
    })};   
}};

module.exports = Genre;
