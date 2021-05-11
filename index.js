const express = require('express');
require('dotenv').config();
const cors = require('cors');
const morgan = require('morgan');
const { dbConnection } = require('./database/config');


const app = express();

// Base de datos
dbConnection();

// CORS
app.use(cors());


// MORGAN
app.use(morgan('dev'));


// Lectura y parseo del body
app.use( express.json() );

// Rutas
app.use('/api/user', require('./routes/auth') );




app.listen( process.env.PORT , () => {
    console.log(`Servidor corriendo en puerto ${ process.env.PORT }`);
});






