import * as productService from '../models/products.model.js';

const products = [
    {
        id: 1,
        nombre: "Laptop Lenovo IdeaPad",
        precio: 750000,
        categoria: "Electrónica",
        descripcion: "Notebook de 15.6 pulgadas con procesador Intel i5 y 8GB RAM",
        stock: 12
    },
    {
        id: 2,
        nombre: "Auriculares Bluetooth Sony",
        precio: 95000,
        categoria: "Accesorios",
        descripcion: "Auriculares inalámbricos con cancelación de ruido",
        stock: 30
    }
];

export const getAllProductsService = async () => {
    return productService.getAllProducts();
}

export const getProductByIdService = async (id) => {
    // return products.find(product => product.id == id);
    return productService.getProductById(id);
};

export const getProductsByFiltersServices = async (category) => {
    return products.filter(product => product.categoria === category);
};

export const createProductService = async (productData) => {
    const { nombre, precio, categoria, descripcion, stock } = productData;
    return productService.saveProduct(nombre, precio, categoria, descripcion, stock);
    // const newProduct = {
    //     id: products.length + 1, 
    //     nombre: productData.nombre, 
    //     precio: productData.precio,
    //     categoria: productData.categoria,
    //     descripcion: productData.descripcion,
    //     stock: productData.stock
    // };
    // products.push(newProduct);
    
    // return newProduct;
}; 

export const updateProductService = async (productData) => {
    const product = products.find(product => product.id == productData.id);
    if (!productData.id || !productData.nombre || !productData.precio || !productData.categoria || !productData.descripcion || !productData.stock) {
        throw new Error('Datos incompletos para actualizar el producto ❌');
    } else {
        product.nombre = productData.nombre;
        product.precio = productData.precio;
        product.categoria = productData.categoria;
        product.descripcion = productData.descripcion;
        product.stock = productData.stock;
        return product;
    }
};

export const deleteProductService = async (id) => {
    return productService.deleteProduct(id);
    // let idNum = Number(id);
    // let index = -1;
    // for (let i = 0; i < products.length; i++) {
    //     if(products[i].id == id) {
    //         index = i;
    //         break;
    //     }
    // }
    
    // if (index > -1) {
    //     let deleteProduct = products.splice(index, 1)[0];
    //     return deleteProduct;
    // }
}; 