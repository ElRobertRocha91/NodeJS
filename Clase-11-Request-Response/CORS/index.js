import express from 'express';
import cors from 'cors';

const app = express();
const PORT = 3000;

// Implementamos un middleware global con cors()
// Configuración básica: Permitir todos los orígenes
app.use(cors());

// Configuración avanzada: Permitir dominios específicos
const corsOptions = {
    // Dominios permitidos
    origin: ['https://example.com'],
    // Métodos HTTP permitidos
    methods: ['GET', 'POST', 'PUT', 'DELETE'], 
    // Encabezados permitidos 
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true //Permitir cookies o credenciales
};

app.use(cors(corsOptions));

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

app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto http://localhost:${PORT}`);
});