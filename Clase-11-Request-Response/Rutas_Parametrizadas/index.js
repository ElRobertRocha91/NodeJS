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

// Path params para rutas dinámicas
app.get('/item/:id', (req, res) => {
    // Captura el valor dinámico de la ruta
    const itemId = req.params.id;
    res.send(`Devolviendo el ítem con ID: ${itemId}`);
});

// Query params
app.get('/items', (req, res) => {
    // Captura los pares clave=valor pasados del signo (?) 
    const category = req.query.category;
    const price = req.query.price;

    res.send(`Categoría: ${category}, Precio: ${price}`);
});

// Combinados path params & query params
app.get('/items/:id', (req, res) => {
    const id = req.params.id;
    const includesDetails = req.query.includesDetails;

    res.send(`Devolviendo el ítem con ID: ${id} y la query: ${includesDetails}`);
});

// Middleware para manejar errores 404
app.use((req, res, next) => {
    res.status(404).send('Recurso no encontrado o ruta inválida');
});

app.listen(PORT, () => {
    console.log(`Server listening on the port: http://localhost:${PORT}`);
});