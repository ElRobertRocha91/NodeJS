const http = require('http');

// Crando el servidor
const server = http.createServer((req, res) => {
    // Código de estado HTTP
    res.statusCode = 200;
    // Configuración del tipo de contenido
    res.setHeader('Content-Type', 'text/plain');
    // Enviando respuesta
    res.end('Iniciando programa...!');
});

const PORT = 3000;

// Indica el puerto de escucha
server.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});