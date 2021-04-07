const express = require("express");
const cors = require("cors");
const app  = express();

app.use(cors());
// constante del puerto
const port = process.env.PORT || 8080;
//importar carpetas 
const about =require("./JSON/About.json");
const portafolio = require("./JSON/Portafolio.json");
//rutas 
app.get('/', (req, res) =>{
    res.send("sunciona")
});

app.get('/about', (req, res) =>{
    res.json(about)
});

app.get('/portafolio', (req, res) =>{
    res.json(portafolio)
});

//levantar el servidor 
app.listen(port,() => {
    console.log(`Servidor en el puerto ${port}`)
});
