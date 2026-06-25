import { getAllProductsService, getProductByIdService, 
    createProductService, deleteProductService, 
    updateProductService } from '../services/products.service.js';

export const getAllProducts = async (req, res) => {
    const products = await getAllProductsService();
    res.status(200).json(products);
};

export const getProductById = async (req, res) => {
    const id = req.params.id;
    const product =  await getProductByIdService(id);
    // Validación
    if (product) {
        res.status(200).json(product);
    } else {
        res.status(404).json({ message: 'Producto no encontrado ❌' });
    }
};

export const createProduct = async (req, res) => {
    const { name, price } = req.body;
    const newProduct = await createProductService({ name, price });
    // Validación
    if (newProduct) {
        res.status(201).json({ message: "Producto creado exitosamente ✅", newProduct });
    } else {
        res.status(404).json({ message: "Error en la creación de nuevo producto ❌" });
    }
}

export const updateProduct = async (req, res) => {
    const { id, name, price } = req.body;
    const updatedProduct = await updateProductService({ id, name, price });
    // Validación
    if (updatedProduct) {
        res.status(200).json({ message: 'Producto actualizado correctamente ✅', updatedProduct});
    } else {
        res.status(404).json({ message: err.message });
    }
}

export const deleteProduct = async (req, res) => {
    const id = req.params.id;
    const product = await deleteProductService(id);
    // Validación
    if (product) {
        res.status(200).json({ message: 'Producto eliminado correctamente ✅' , product });
    } else {
        res.status(404).json({ message: 'Producto no encontrado ❌'});
    }
}