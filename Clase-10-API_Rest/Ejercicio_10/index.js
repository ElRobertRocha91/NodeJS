import express from 'express';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const PORT = 3000;

// Configurar middleware para servir archivos estáticos
app.use(express.static(join(__dirname, 'public')));

app.get('/usuarios', (req, res) => {
    res.json(
        {
            "usuarios": [
                {
                    "id": 1,
                    "nombre": "Juan",
                    "apellido": "Pérez",
                    "edad": 28,
                    "email": "juan.perez@example.com",
                    "celular": "1134567890"
                },
                {
                    "id": 2,
                    "nombre": "María",
                    "apellido": "Gómez",
                    "edad": 32,
                    "email": "maria.gomez@example.com",
                    "celular": "1145678901"
                },
                {
                    "id": 3,
                    "nombre": "Carlos",
                    "apellido": "López",
                    "edad": 25,
                    "email": "carlos.lopez@example.com",
                    "celular": "1156789012"
                }
            ]
        }
    );
});

app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto http://localhost:${PORT}`);
});