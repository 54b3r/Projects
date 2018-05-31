const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const pricesSchema = new Schema({
    name: {type: String, required: true},
    description: String, 
    price: {type: Number, required: true}
});

const Prices = module.exports = mongoose.model('Prices', pricesSchema); {
    function getPrices(){ Prices.getPrices(function(callback, limit) {
        Prices.find(callback).limit(limit);
        }
    )};
    const getPriceById = function getPrice() {Prices.getPrice((_id, callback) => {
        Prices.findById(_id, callback);
    })}
    const createPrice = function createPrice() {Prices.createPrice((newPrice, callback) => {
        Prices.create(newPrice, callback);
    })}
    const updatePrice = function updatePrice() {Prices.updatePrice((query, update, options, callback) => {
        var query = {_id: _id};
        var update = {
            name: Price.name,
            description: Prices.description,
            price: Prices.price,
        } 
        Prices.findOneAndUpdate(query,update, options, callback);
    })}

    
};