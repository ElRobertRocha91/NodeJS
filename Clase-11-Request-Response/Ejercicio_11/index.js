import express from 'express';
import cors from 'cors';
import products from './data.js'

const app = express();
const PORT = 3000;

// Configuración de CORS
app.use(cors({

    origin: (origin, callback) => {

        if (!origin || origin === `http://localhost:${PORT}`) {

            callback(null, true);

        } else {

            callback(new Error("No permitido por CORS"));

        }

    },

    methods: ["GET", "POST", "PUT", "DELETE"],

    allowedHeaders: ["Content-Type", "Authorization"]

}));

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

app.get('/products', (req, res) => {
    res.json(products).status(200);
});

// Path params
app.get('/products/:id', (req, res) => {
    // Guarda la variable id en formato númerico
    const id = Number(req.params.id);
    const data = products.find((product) => product.id === id);
    
    // Validación
    if (!data) {
        res.status(404).send("Error: producto inexistente.");
    } else {
        res.status(200).json(data);
    }
});

// Query params
app.get('/productos/categorias', (req, res) => {
    // const id = Number(req.params.id);
    const category = req.query.category;
    const data = products.filter((product) => product.categoria === category);
    
    // Validación
    if (!data) {
        res.status(404).send("Error: Categoría inexistente");
    } else {
        res.status(200).json(data);
    }
});

// Middleware para manejar rutas inexistentes y errores 404
app.use((req, res, next) => {
    res.status(404).send('Recurso no encontrado o ruta inválida');
});

app.listen(PORT, () => {
    console.log(`Server listening on the port: http://localhost:${PORT}`);
});