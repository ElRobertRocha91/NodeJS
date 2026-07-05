import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// const __dirname = import.meta.dirname;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const dataPath = path.join(__dirname, '../data/products.json');

console.log(dataPath);

// Método para obtener todos los productos
export function getAllProducts() {
    const data = fs.readFileSync(dataPath, 'utf-8');
    return JSON.parse(data);
}; 

// Método para buscar un producto por su ID
export function getProductById(id) {
    const products = this.getAllProducts();
    return products.find(product => product.id == id);
};

// Método para guardar un producto en el archivo JSON
export function saveProduct(nombre, precio, categoria, descripcion, stock) {
    const products = this.getAllProducts();
    products.push({ id: products.length + 1, nombre, precio, categoria, descripcion, stock });
    fs.writeFileSync(dataPath, JSON.stringify(products, null, 2));
    return products;
}

// Método para eliminar un producto por su ID
export function deleteProduct(id) { // REVISAR!!!
    let products = this.getAllProducts();
    let idNum = Number(id);
    let index = -1;
    for (let i = 0; i < products.length; i++) {
        if(products[i].id == id) {
            index = i;
            break;
        }
    }
    
    if (index > -1) {
        let deleteProduct = products.splice(index, 1)[0];
        return deleteProduct;
    }
    // products = products.filter(product => product.id !== id);
    fs.writeFileSync(dataPath, JSON.stringify(products, null, 2));
    return products;
}