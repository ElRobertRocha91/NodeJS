import express, { json } from 'express';
import cors from 'cors';

import productsRouter from './src/routes/products.routes.js';

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

// Configuración para leer JSON en el body
app.use(express.json());

// Middleware de aplicación
app.use((req, res, next) => {
    console.log(`Datos recibidos: ${req.method} ${req.url}`);
    next(); // Pasa el control al siguiete middleware o ruta
});

// Rutas
app.use('/api', productsRouter);

// Middleware para menjar errores y rutas inexistentes
app.use((req, res, next) => {
    res.status(404).send("Recurso no encontrado");
});

app.listen(PORT, () => {
    console.log(`Server listening on the port: http://localhost:${PORT}`);
});