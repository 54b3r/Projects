const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const config = require('../config/database');

//create the user schema
const userSchema = mongoose.Schema({
    name: {
        type: String
    },
    email: {
        type: String,
        required: true,
    },
    username: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    }
});

const User = module.exports = mongoose.model('User', userSchema);

//how to use a function outside of this module
module.exports.getUserbyId = function(_id, callback) {
    User.findById(callback);
}
module.exports.getUserbyUsername = function(username, callback) {
    const query = {username: username}
    User.findOne(query);
}
//function to add a user, while encrypting the password field (good for storing the data)
module.exports.addUser = function(newUser, callback) {
    //encrypt password using bcrypt
    bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
            if(err) {
                throw err;
            }
            newUser.password = hash
            newUser.save(callback);
        })
    });
}