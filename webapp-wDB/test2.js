const mongoose = require('mongoose')
    , Schema = mongoose.Schema;
//Genre Schema
var mySchema = new Schema({genre: String}, { collection: 'genres' });

//const db1 = mongoose.connection;
const db1 = mongoose.createConnection('mongodb://127.0.0.1:27017/vidly-app')
    , GenrePost = db1.model('GenrePost', mySchema);
var genre1 = new GenrePost({ genre: "Test-Genre-To-Add"});
console.log(genre1.genre);

GenrePost.find({}, 'GenrePost', (err, docs) => {
    if(err) return console.error(err);
    console.log(docs)
}) 

genreQuery('genre', {}, (err, docs) => {
    //genreQuery('genre', {genre: "" }, (err, docs) => {
        if(err) return console.error(err);
        console.log(`Here is your list of Collections for: genres ${docs}`);
    })
    db1.close();


function genreQuery (name, query, cb) {
    var db1 = db1.db.collection(name, (err, collection) => {
        collection.find(query).toArray(cb);
        console.log(cb);
    });
};

//db1.on('error', console.error.bind(console, 'Conncection error:...'));
//db1.once('open', () => {
//    console.log('The connection to the server has been made successfully');
//    const GenreSchema = mongoose.Schema({
//        genre: String,
//    }, { collection: 'genres'});
//    
//    const Genre = mongoose.model('Genre', GenreSchema,);
//
//    var listGenres = new Genre();
//});