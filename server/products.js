const Product = require('APP/db/models/product')

const products = require('express').Router()
    .get('/', (req, res, next) =>
        Product.findAll()
            .then(products =>
                res.send(products)
            )
    )

module.exports = products