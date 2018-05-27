const mongoose = require('mongoose');
const Schema = mongoose.Schema();

//connect to server, and add error checkfunction: passfunction w/ only 1 arg (err)

//class GenreQuery extends GenreSchema
mongoose.connect('mongodb://127.0.0.1:27017/vidly-app', (err) => {if(err) return console.error(err)});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Conncection error:...'));
db.once('open', () => {
    console.log('Connection has been made successfull...');
    //connection has been made, lets query a collection 
    //Define the schema 
    const GenreSchema = mongoose.Schema({
        genre: String
    }, { collection: 'genres'});
    //compaile schema to a model
    const Genre = mongoose.model('Genre', GenreSchema,);
    const AddGenre = new Genre(); 
    var addGenre = AddGenre.find();
    //var genres = mongoose.model('Genre');
    const listGenres = AddGenre.find();
    addGenres.toArray((err, data) => {
        if(err) return console.error(err);
        console.log(data);
    });
       
    
    //genres.find({}, (err, data) => { 
    //    if(err) return console.log(err);
    //    console.log(data);
    //});
    
    db.close();
    
});

const test = () => {
    db.once('open', () => {
        console.log('A connection has been made successfully... ');
    
    //Now we initialize a new document 
    var book1 = new Book({
        name: "Dear John",
        price: 10,
        quantity: 25
    });

    //save document to database
    book1.save((err, book) => {
        if(err) return console.error(err);
        console.log(book.name +" Was just saved to the mainDB Collection");
    });
})};