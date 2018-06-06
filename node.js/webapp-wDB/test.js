const mongoose = require('mongoose');
const Schema = mongoose.Schema
const db1 = mongoose.connection;
mongoose.connect('mongodb://127.0.0.1:27017/vidly-app', (err) => {if(err) return console.error(err)});


function genreQuery (name, query, cb) {
    db1.db.collection(name, (err, collection) => {
        return collection.find(query).toArray(cb);
    });
};

db1.on('error', console.error.bind(console, 'Conncection error:...'));
db1.once('open', () => {
    console.log('The connection to the server has been made successfully');
    //const GenreSchema = mongoose.Schema(
    const GenreSchema = new Schema({
        genre: String,
    }, { collection: 'genres'});
    
    const Genre = mongoose.model('Genre', GenreSchema,);
    
    listGenres.toString((err, data) => {
        if(err) return console.error(err);
        console.log(`List of collections ${data}`);
    });
    genreQuery('genre', {}, (err, docs) => {
    //genreQuery('genre', {genre: "" }, (err, docs) => {
        if(err) return console.error(err);
        console.log(`Here is your list of Collections for: genres ${docs}`);
    })
    db1.close();
});