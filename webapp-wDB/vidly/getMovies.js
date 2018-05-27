class GetMovies extends mongoose{
    getMovies() {
        const mongoose = require('mongoose');
        const Schema = mongoose.Schema;

        mongoose.connect('mongodb://127.0.0.1:27017/vidly-app')
        const db1 = mongoose.connection

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
                },{collection: 'movies' },
                
            )
            const queryGetMovies = db1.model('queryGetMovies', movieSchema);
            queryGetMovies.find((err,docs) => {
                if(err) return console.error(err);
                console.log('Below are your results:...');
                console.log(docs);
            });
        })
    }
}

module.exports = GetMovies;