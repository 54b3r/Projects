const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema({
    name: {type: String, required: true},
    description: {type: String, required: true}
});

class Product {
    getProduct(){getProduct(function(callback, limit) {
        Products.find(callback).limit(limit);
    })};
    getProductById() {getProduct((_id, callback) => {
        Prices.findById(_id, callback);
    })};
    createProduct() {createProduct((newProduct, callback) => {
        Prices.create(newProduct, callback);
    })};
    updateProduct(){((query, update, options, callback) => {
        var query = {_id: _id};
        var update = {
            name: Product.name,
            description: Product.description,
        } 
        Products.findOneAndUpdate(query,update, options, callback);
    })};
};

Product.getProduct()