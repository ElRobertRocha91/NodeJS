import express from 'express';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();

// Configurar middleware para servir archivos estáticos
app.use(express.static(join(__dirname, 'public')));

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor en http://localhost:${PORT}`);
});