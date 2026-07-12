import * as productService from '../models/products.model.js';

export const getAllProductsService = async () => {
    return productService.getAllProducts();
}

export const getProductByIdService = async (id) => {
    return productService.getProductById(id);
};

export const getProductsByFiltersServices = async (category) => {
    if (category) {
        const products = await productService.getAllProducts();
        return products.filter(product => product.category == category);
    } else {
        return productService.getAllProducts();
    }
};

export const createProductService = async (productData) => {
    return productService.saveProduct(productData);
}; 

export const updateProductService = async (id, productData) => {
    return productService.updateProduct(id, productData);
};

export const deleteProductService = async (id) => {
    return productService.deleteProduct(id);
};  