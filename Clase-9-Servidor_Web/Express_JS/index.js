import express from "express";

// Creamos una instancia de express
const app = express();

// Definimos una ruta llamamdo a GET
app.get('/', (req, res) => {
    res.send('Hola, soy un mensaje desde Express!');
});

app.get('/productos', (req, res) => {
    res.send('Bienvenido a la página de productos!');
});

app.get('/productos/14', (req, res) => {
    res.send('Estas viendo el productos N° 14.!');
});

// Inicializamos el puerto donde estara escuchando nuestras peticiones
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});