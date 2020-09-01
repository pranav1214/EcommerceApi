const path = require('path');

module.exports = app => {
    const ProductControllers = require(path.join(__dirname,"../controllers/product.controller"));
    const Router = require("express").Router();

    Router.post('/products', ProductControllers.create);
    Router.get('/products/:id', ProductControllers.findOne);
    Router.get('/products', ProductControllers.findAll);
    Router.delete('/products/:id', ProductControllers.delete);
    Router.put("/:id", ProductControllers.update);

    app.use('/', Router);
}