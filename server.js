const express = require('express')
const dotenv = require('dotenv')
const colors = require('colors')

// dependencias de ruta
const bootcampsRoutes = require('./routes/bootcampRoutes')
const coursesRoutes = require('./routes/coursesRoutes')

// Construir el objeto app
const app = express()

//vincular las rutas del proyecto
app.use('/bootcamps', bootcampsRoutes)
app.use('/courses', coursesRoutes)


// Configurar variables de entorno
dotenv.config(
    { path: './config/.env'}
)

// Prueba de url
app.get('/prueba', function(req, res){
    res.send('Hola')
});

// Prueba de ruta parametrizada
app.get('/prueba/:id' , function(req , res){
    res.send(`parametro enviado: ${ req.params.id }`)
});

// Tomar variable puerto del puerto
const puerto = process.env.PUERTO

// Servidor de desarrollo
app.listen( puerto, function(){
    console.log(`Servidor ejecutando...${puerto}`.bgMagenta.yellow.inverse)
})






