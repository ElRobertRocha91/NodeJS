import express from 'express';
import cors from 'cors';
import 'dotenv/config';

import productsRouter from './src/routes/products.routes.js';
import authRouter from './src/routes/auth.routes.js';

const app = express();
const PORT =  process.env.PORT || 3000;

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
app.get('/', (req, res) => {
    res.status(200).send("Proyecto Integrador Final en producción 🚀");
});

// Middleware para manejar la ruta de autenticación del usuario
app.use('/auth', authRouter);

// Middleware para manejar las rutas existentes 200
app.use('/api', productsRouter);

// Middleware para manejar errores 404 y rutas inexistentes
app.use((req, res, next) => {
    res.status(404).json({ error: "Recurso no encontrado" });
});

app.listen(PORT, () => {
    console.log('=====================================================');
    console.log(`Server listening on the port: http://localhost:${PORT}`);
    console.log('=====================================================');
});