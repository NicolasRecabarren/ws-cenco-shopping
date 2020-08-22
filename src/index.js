const express = require('express');
const morgan = require('morgan');
const app = express();

// Settings
//app.set('port', process.env.PORT || 3000);
app.set('port', 3000);

// Middlewares
app.use(morgan('dev'));
app.use(express.json());

// Routes
app.use('/api/products', require('./routes/product.routes'));

// Iniciamos el servidor...
app.listen( app.get('port'), () => {
    console.log("server on port " + app.get('port'));
});