const express = require('express');
const { dbconection } = require('./database/config');
require('dotenv').config();
const cors = require('cors');

//console.log('Hola mundo');

//codigo para desplegar servidor

//usuario: userOrtega pasword:iGkziJYNrSl1Hx36

//string de coneccion: mongodb+srv://userOrtega:<password>@cluster0.feezi.mongodb.net/test

const server = express();

//configurando cors
server.use(cors());

//primera peticion get
server.get('/', (req, res) => {
    res.json({
        ok: true,
        msg: 'Desplegando el primer servicio Rest'
    })
});

dbconection();

//console.log(process.env);


server.listen(process.env.PORT, () => {
    console.log('El servidor se esta ejecutando en el puerto: ' + process.env.PORT);
    console.log('Max Tibo Ortega Requelme');
});