//This is using mongoose to connect to a MongoDB database and interact with that DB
//Some write and delete functions are done here
const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/vidly-app');
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Conncection error:...'));
db.once('open', () => {
    console.log('Connection has been sucessfull...');
    //const BookSchema = mongoose.Schema({
//    name: String,
//    price: Number,
//    quantity: Number,
//}, { collection: 'mainDB'});
    const GenreSchema = new Schema({
        genre: String,
    }, { collection: 'genres'});

    //now that we have a schema we compaile it to a modle
    const Book = mongoose.model('Book', BookSchema,);

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
});

//const mongoUrl = "mongodb://127.0.0.1:27017/vidly-app"
//const mongoClient = require('mongodb').mongoClient;
//mongoClient.connect(mongoUrl, (err,db) => {
//    if(err) throw err;
//    console.log('Connected to MongoDB!...');
//    db.close();
//});

//const BookSchema = mongoose.Schema({
//    name: String,
//    price: Number,
//    quantity: Number,
//}, { collection: 'mainDB'});

