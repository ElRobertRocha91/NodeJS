import { getAllProductsService, getProductByIdService, 
    getProductsByFiltersServices, createProductService, 
    updateProductService, deleteProductService } from "../services/products.service.js";

export const getAllProducts = async (req, res) => {
    try {
        const category = req.query.category;
        if (!category) {
            const products = await getAllProductsService();
            res.status(200).json(products);
        } else {
            const productsByFilters = await getProductsByFiltersServices(category);
            res.status(200).json(productsByFilters);
        }
    } catch (error) {
        res.status(404).json({ message: error});
    }
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
    const { nombre, precio, categoria, descripcion, stock } = req.body;
    const newProduct = await createProductService({ nombre, precio, categoria, descripcion, stock });
    // Validación
    if (newProduct) {
        res.status(201).json({ message: "Producto creado exitosamente ✅", newProduct });
    } else {
        res.status(404).json({ message: "Error en la creación de nuevo producto ❌" });
    }
}; 

export const updateProduct = async (req, res) => {
    const { id, nombre, precio, categoria, descripcion, stock } = req.body;
    const updatedProduct = await updateProductService({ id, nombre, precio, categoria, descripcion, stock });
    // Validación
    if (updatedProduct) {
        res.status(200).json({ message: 'Producto actualizado correctamente ✅', updatedProduct});
    } else {
        res.status(404).json({ message: err.message });
    }
}; 

export const deleteProduct = async (req, res) => {
    const id = req.params.id;
    const product = await deleteProductService(id);
    // Validación
    if (product) {
        res.status(200).json({ message: 'Producto eliminado correctamente ✅' , product });
    } else {
        res.status(404).json({ message: 'Producto no encontrado ❌'});
    }
}; 
