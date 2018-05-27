class GetGenres {
    getGenres() {
        const mongoose = require('mongoose');
        const Schema = mongoose.Schema;

        mongoose.connect('mongodb://127.0.0.1:27017/vidly-app')
        const db1 = mongoose.connection;
        db1.on('error', console.error.bind(console, 'Conncection error:...'));
        db1.once('open', () => {
            console.log('You have successfully connected to the genre db...');
            
            var genreSchema = new Schema({genre: String}, { collection: 'genres' });
            queryGetGenre = db1.model('queryGetGenre', genreSchema);

            queryGetGenre.find((err,docs) => {
                if(err) return console.error(err);
                console.log(docs);
            });
            
        });
    }
}

module.exports = GetGenres;