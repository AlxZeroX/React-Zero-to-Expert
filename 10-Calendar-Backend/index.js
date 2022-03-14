
const express = require( 'express');
require('dotenv').config();

// console.log( process.env.PORT );

//Crear el servidor de express
const app = express();

//Directorio publico
app.use( express.static('public') );


//rutas
app.use('/api/auth', require('./routes/auth') );
// TODO: CRUD: Eventos



//escuchando peticiones
app.listen( process.env.PORT, () => {
    console.log( `Servidor Corriendo en puerto ${ process.env.PORT }`);
});