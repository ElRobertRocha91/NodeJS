import express from 'express';

const router = express.Router();

import { getAllProducts, getProductById, createProduct, updateProduct, deleteProduct } from '../controllers/products.controller.js';

router.get('/products', getAllProducts);

router.get('/products/:id', getProductById);

router.post('/products', createProduct);

router.put('/products', updateProduct);

router.delete('/products/:id', deleteProduct);

export default router;