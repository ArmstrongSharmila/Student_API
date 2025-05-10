const express = require ('express');
const routes =express.Router();
require('dotenv').config();
const path = require('path');
const { getAllProducts } = require('../controllers/productController');


// create products
routes.get('/' ,getAllProducts );



module.exports =routes;
