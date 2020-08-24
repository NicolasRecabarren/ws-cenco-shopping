# Cenco Shopping

Proyecto de prueba/ejemplo, el cual tiene por objetivo ser el backend de un ecommerce.

## Instalación

Para instalar el proyecto favor utilizar el manejador de paquetes de nodejs [npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) para instalar las dependencias.

```bash
npm install
```

## Correr el servicio

```bash
npm run start
```

## Ejecutar las pruebas

```bash
npm run test
```

## API
Todas las peticiones realizadas para consumir la API actualmente deben ser realizadas mediante método GET. Las direcciones son las siguientes:
- Para obtener el listado de todos los productos.
```bash
/api/products
```
- Para obtener el detalle de un producto.
```bash
/api/products/:code
```
- Para hacer el checkout de todos los productos.
```bash
/api/products/checkout
```
*Adicionalmente se adjunta collection de Postman para realizar las pruebas.