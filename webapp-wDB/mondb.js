const mongoUrl = "mongodb://127.0.0.1:27017/vidly-app"
const mongo = require('mongodb');
const genreQueryServer = new mongo.Server('127.0.0.1', 27017, {autoreconnect: true});

const dbref = new mongo.Db('genres', genreQueryServer);
//connect to db server
dbref.open( (err, dbref) => {
    if(err) throw err;
    console.log('Connected to the MongoDB Server');

    findGenre = collectionref.find();
        findGenres.toArray( (err, docsInCollection) => {
            if(err) throw err;
            console.log(docsInCollection);
        });

});





//retrieve a collection reference
//dbref.collection('genres', (err, collectionref) => {
//    if(err) throw err;
//    console.log(collectionref);
//});

dbref.close();
//(err,db) => {
//    if(err) throw err;
//    console.log('Connected to MongoDB!...');
//    db.close();
//});