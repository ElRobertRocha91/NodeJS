import express, { json } from 'express';
import cors from 'cors';

import productsRouter from './src/routes/products.routes.js';

const app = express();
const PORT = 3000;

// Configuración básica de cors(): Permitir todos los origenes
app.use(cors());

// Configuración para leer JSON en el body 
app.use(express.json());

// Rutas
app.use('/api', productsRouter);

// Middleware para manejar errores 404
app.use((req, res, next) => {
    res.status(404).send('Recurso no encontrado');
});

app.listen(PORT, () => {
    console.log(`Server listening on the port: http://localhost:${PORT}`);
});