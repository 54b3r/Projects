const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//v1 of this function: will be edited for various other queries

var genreSchema = new Schema({genre: String, required:true}, { collection: 'genres' });

mongoose.connect('mongodb://127.0.0.1:27017/vidly-app')
queryGetGenre = db1.model('GenrePost', genreSchema);
db1.on('error', console.error.bind(console, 'Conncection error:...'));
db1.once('open', () => {
    console.log('You have successfully connected to the genre db...');
    queryGetGenre.find((err,docs) => {
        if(err) return console.error(err);
        return console.log(docs);
    });

});
console.log("Now closing the genres db connectoin: everything has been successful");

function queryMoviesCollection() {
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
        },{collection: 'movies' }
    );

    const queryGetMovies = db1.model('queryGetMovies', movieSchema);
    //adding old connection so i can utilize the event emitter on this connection
    mongoose.connect('mongodb://127.0.0.1:27017/vidly-app')
    const db1 = mongoose.connection
    db1.on('error', console.error.bind(console, 'Conncection error:...'));
    db1.once('open', () => {
        console.log('Connection to the movies db has been sucessfull...');

        queryGetMovies.find((err,docs) => {
            if(err) return console.error(err);
            console.log(docs);
    
        });
    })
}

queryMoviesCollection()


function genreQuery (name, query, cb) {
    var db1 = db1.db.collection(name, (err, collection) => {
        if(err) return console.error(err);
        collection.find(query).toArray(cb);
        console.log(cb);
    });
};

process.exit(0);