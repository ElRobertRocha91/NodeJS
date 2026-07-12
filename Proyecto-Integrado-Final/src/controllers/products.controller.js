import e from "express";
import { getAllProductsService, getProductByIdService, 
    getProductsByFiltersServices, createProductService, 
    updateProductService, deleteProductService } from "../services/products.service.js";

export const getAllProducts = async (req, res) => {
    try {
        const category = req.query.category;
        if (!category) {
            const products = await getAllProductsService();
            res.status(200).json({ message: "Busqueda de productos exitosa ✅" ,products});
        } else {
            const productsFiltered = await getProductsByFiltersServices(category);
            res.status(200).json({ message: `Productos filtrados con la categoria ${category}` ,productsFiltered});
        }
    } catch (error) {
        res.status(404).json(error.message);
    }
};

export const getProductById = async (req, res) => {
    const id = req.params.id;
    const product =  await getProductByIdService(id);
    // Validación
    if (product) {
        res.status(200).json({ message: `Producto con el ID:${id}, exitosamente encontrado ✅`, product});
    } else {
        res.status(404).json({ message: 'Producto no encontrado ❌' });
    }
}; 

export const createProduct = async (req, res) => {
    const { name, price, category, description, stock } = req.body;
    
    try {
        // Validación
        if (!name || !price || !category || !description || !stock) {
            res.status(404).json({ message: "Datos incompletos para crear el producto ❌" })       
        } else {
            const newProduct = await createProductService({ name, price, category, description, stock });
            res.status(201).json({ message: "Producto creado exitosamente ✅", newProduct });
        }
    } catch (error) {
        res.status(500).json({ message: "Error en la creación de nuevo producto ❌", error });
    }
}; 

export const updateProduct = async (req, res) => {
    const id = req.params.id;
    const { name, price, category, description, stock } = req.body;

    try {
        // Validación
        if (!name || !price || !category || !description || !stock) {
            res.status(404).json({ message: "Datos incompletos para actualizar el producto ❌"});
        } else {
            const updatedProduct = await updateProductService(id, { name, price, category, description, stock });
            res.status(200).json({ message: 'Producto actualizado correctamente ✅', updatedProduct});
        }
    } catch (error) {
        res.status(500).json({ message: "Error tipo 500 en el servidor", error });
    }
}; 

export const deleteProduct = async (req, res) => {
    const id = req.params.id;
    const deleted = await deleteProductService(id);

    try {
        // Validación 
        if (!deleted) {
            res.status(404).json({ message: 'Producto no encontrado ❌'});
        } else {
            res.status(200).json({ message: `El producto con el ID: ${id} fue eliminado exitosamente ✅`});
        }
    } catch (error) {
        res.status(500).json({ message: 'Error al eliminar el producto ❌', error: error.message});
    }
}; 
 