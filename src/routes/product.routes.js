/**
 * Archivo Routes
 * Con este archivo routes bastaría para realizar la API consultando los productos en el repositorio de datos.
 */

const express = require('express');
const Product = require('../models/Product');
const router = express.Router();

// Hacemos el checkout de todos los productos registrados en el repositorio de datos.
router.get('/checkout', (req, res) => {
    const products = Product.getAll();
    
    const result = {
        totalProducts: 0, // Precio total de los productos.
        totalToPay   : 0, // Total a pagar
        totalDiscount: 0, // Total de descuentos
        products     : [] // Listado de productos usados en el checkout (sólo códigos)
    };

    products.forEach( (element, index) => {
        result.totalProducts += element.price
        result.totalDiscount += element.discount
        result.totalToPay    += (element.price - element.discount)

        result.products.push(element.code)
    });

    res.status(200).json(result);
});

router.get('/:code?', (req, res) => {
    // Si no viene código de producto, entonces los retornaremos todos.
    if( !req.params.code ){
        res.status(200).json(Product.getAll());
        
    } else {
        // Retornamos el producto según el código que nos hayan enviado por parámetro.
        res.status(200).json(Product.getProductByCode(req.params.code));
    }
});

module.exports = router;