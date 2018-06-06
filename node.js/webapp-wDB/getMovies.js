const mongoose = require('mongoose');

class GetMovies {
    getMovies() {
        const mongoose = require('mongoose');
        const Schema = mongoose.Schema;

        const db = mongoose.connect('mongodb://127.0.0.1:27017/vidly-app')
        const db1 = mongoose.connection

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
        },{collection: 'movies' })

        const queryGetMovies = db1.model('Movies', movieSchema);
        queryGetMovies.find((err,docs) => {
            if(err) return console.error(err);
            return console.log('Below are your results:...');
            return console.log(docs);
            });

        
    }
}

function getMovies() {
    const mongoose = require('mongoose');
    const Schema = mongoose.Schema;

    const db1 = mongoose.connect('mongodb://127.0.0.1:27017/vidly-app')
//    const db1 = mongoose.connection

    db1.on('error', console.error.bind(console, 'Conncection error:...'));
    db1.once('open', () => {
        console.log('Connection to the movies db has been sucessfull...');
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
            },{collection: 'movies' })

        const queryGetMovies = db1.model('Movies', movieSchema);
        queryGetMovies.find((err,docs) => {
            if(err) return console.error(err);
            return send('Below are your results:...');
            return (docs);
        });
    })
    db1.close();
}

module.exports = GetMovies;
`getMovies = function (callback, limit){
    Movies.find(callback).limit(limit);
}`