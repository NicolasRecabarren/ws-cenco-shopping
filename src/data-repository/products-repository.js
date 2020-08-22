/**
 * En vista de que no se utilizará una base de datos en la solución, definiremos en este archivo un pseudo repositorio de datos de los registros de los productos en formato JSON.
 */
const products = [
    { code: "BT" , name: "blue t-shit" , price: 100, discount: 20 },
    { code: "RT" , name: "red t-shit"  , price: 100, discount: 0  },
    { code: "BJX", name: "blue jeans X", price: 100, discount: 5  },
    { code: "BJY", name: "blue jeans Y", price: 100, discount: 30 },
    { code: "BJZ", name: "blue jeans Z", price: 100, discount: 0  },
];

module.exports = products;