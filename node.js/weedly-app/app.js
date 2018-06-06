//NEED TO ADD DELETE ROUTE DO NOT FORGET THIS 
const express = require('express');
const mongoose = require('mongoose');
const app = express();
app.use(express.json());

mongoose.connect('mongodb://127.0.0.1:27017/weedly-app');
const db = mongoose.connection;

const Prices = require('./models/prices');
const Products = require('./models/products');
const Requests = require('./models/requests');

app.get('/', (req, res) => {
    res.json('You have reached the root of this WebServer.')
});
app.get('/api/prices', (req, res) => {
    Prices.find((err, prices) => {
        if(err) {
            throw err;
        }
        res.json(prices);
    });
})
app.get('/api/prices/:id', (req, res) => {
    const _id = req.param._id
    Prices.findById(_id, (err, price) => {
        if(err) {
            throw err;
        }
        res.json(price);
    });
});
app.post('/api/prices', (req, res) => {
    const newPrice = req.body;
    Prices.create(newPrice, (err, newPrice) => {
        if(err) {
            throw err;
        }
        res.json(newPrice);
    })
});
app.put('/api/prices/:_id', (req, res) => {
    var _id = req.params._id;
    var update = {
        name: Price.name,
        description: Prices.description,
        price: Prices.price,
    } 
    Prices.findOneAndUpdate(_id, update, {}, (err, price) => {
        if(err) {
            throw err;
        }
        res.json(price)
    });
});

app.get('/api/products', (req, res) => {
    Products.find((err, products) => {
        if(err) {
            throw err;
        }
        res.json(products)
    })
});
app.get('/api/products/:_id', (req, res) => {
    const _id = req.params._id
    Products.findById(_id, (err, product) => {
        if(err) {
            throw err;
        }
        res.json(product)
    })
});
app.post('/api/products', (req, res) => {
    const newProduct = req.body;
    Products.create(newProduct, (err, newProduct) => {
        if(err) {
            throw err;
        }
        res.json(newProduct)
    });
});
app.put('/api/products/:_id', (req, res) => {
    const _id = req.params._id;
    const update = {
        name: Products.name,
        description: Products.description
    }
    Products.findOneAndUpdate(_id, {}, update, (err, product) => {
        if(err) { 
            throw err;
        }
        res.json(product);
    });    
});

const port = process.env.PORT || 3000;
app.listen(port, () =>{console.log(`Listening on port ${port}`)});