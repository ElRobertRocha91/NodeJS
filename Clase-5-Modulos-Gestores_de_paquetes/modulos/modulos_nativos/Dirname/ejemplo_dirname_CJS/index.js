const path = require('path');
const fs = require('fs');

fs.readFile('C:/Users/rober/OneDrive/Escritorio/NodeJS/Clase-5-Modulos-Gestores_de_paquetes/modulos/modulos_nativos/Dirname/ejemplo_dirname_CJS/data/data.txt', 'utf8', 
    (err, data) => {
        if(err) {
            console.error('Error al leer el archivo data: ', err);
            return;
        }
        console.log('Contenido del archivo data: ', data);
    }
);

// Ejemplo con ruta absoluta utilizando __dirname

const filePath = path.join(__dirname, 'data', 'data.txt');

fs.readFile(filePath, 'utf8', (err, data) => {
    if(err) {
        console.error('Error al leer el archivo:', err);
        return;
    }
    console.log('Contenido del archivo:', data);
});