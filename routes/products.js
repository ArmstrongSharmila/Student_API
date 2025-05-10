const express = require ('express');
const routes =express.Router();
require('dotenv').config();
const path = require('path');
const { getAllProducts, getSingleProducts, createProduct, deleteProduct, updateProduct } = require('../controllers/productController');


// create products
routes.get('/' ,getAllProducts );

// getSingleProducts
routes.get('/:id',getSingleProducts)

// crete product
routes.post('/', createProduct)

// update product
routes.put('/:id',updateProduct)

// deleted product
routes.delete('/:id' ,deleteProduct)


module.exports =routes;
