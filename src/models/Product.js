const products = require('../data-repository/products-repository');

/**
 * Modelo de Producto.
 * Aquí definiremos los métodos que harán la búsqueda en el repositorio de datos de los productos (archivo products-repository.js).
 */
class Product {

    // Método que devuelve todos los productos.
    getAll = () => products;

    // Método que retorna un producto según el código especificado por parámetro.
    getProductByCode = (code) => products.find((product) => product.code == code);

}

module.exports = new Product;