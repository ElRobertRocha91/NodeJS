import express from 'express';

const app = express();

// Middleware de aplicación
app.use((req, res, next) => {
    console.log(`Datos recibidos: ${req.method} ${req.url}`);
    next(); // Pasa el control al siguiete middleware o ruta
});

// Ruta principal
app.get('/ping', (req, res) => {
    res.send('/pong');
});

// Inicializamos el puerto donde estara escuchando nuestra petición
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor en http://localhost:${PORT}`);
})

export default app;