import { fileURLToPath } from 'url';
import path from 'path';
import fs from 'fs';

// Obtener el directorio actual
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log('Ruta absoluta:', __dirname);

// Obtengo la ruta absoluta al archivo data.txt usando __dirname
const filePath = path.join(__dirname, 'data', 'data.txt');

// Leemos el archivo data.txt
fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
        console.error('Error al leer el archivo:', err);
        return;
    }
    console.log('****************************************************');
    console.log('Contenido del archivo:', data);
    console.log('****************************************************');
});