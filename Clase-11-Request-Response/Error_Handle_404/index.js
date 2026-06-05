import express from 'express';
import cors from 'cors';

const app = express();
const PORT = 3000;

// Configuración básica de CORS
app.use(cors());

app.get('/', (req, res) => {
    res.send("Hola soy un mensaje de express");
});

app.get('/HTML', (req, res) => {
    res.send("<h1>Hola Mundo en HTML</h1>")
});

app.get('/JSON', (req, res) => {
    res.json({
        id: 1,
        name: "Roberto",
        email: "roberto@gmail.com"
    });
});

// Middleware para manejar errores 404
app.use((req, res, next) => {
    res.status(404).send('Recurso no encontrado o ruta inválida');
});

app.listen(PORT, () => {
    console.log(`Server listening on the port: http://localhost:${PORT}`);
});