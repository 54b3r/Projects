const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema({
    name: {type: String, required: true},
    description: {type: String, required: true}
});

const Products = module.exports = mongoose.model('Products', productSchema); {
    function getProduct(){ Products.getProduct(function(callback, limit) {
        Products.find(callback).limit(limit);
    })};
    const getProductById = function getProduct() {Products.getProduct((_id, callback) => {
        Prices.findById(_id, callback);
    })};
    const createProduct = function createProduct() {Products.createProduct((newProduct, callback) => {
        Prices.create(newProduct, callback);
    })};
    const updateProduct = function updateProduct() {Products.updateProduct((query, update, options, callback) => {
        var query = {_id: _id};
        var update = {
            name: Product.name,
            description: Product.description,
        } 
        Products.findOneAndUpdate(query,update, options, callback);
    })};

    
};