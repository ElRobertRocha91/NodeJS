import express from 'express';

const router = express.Router();

import { getAllProducts, getProductById, createProduct, updateProduct, deleteProduct } from '../controllers/products.controller.js';
import { authenticación } from '../middlewares/authentication.js';

router.get('/products', getAllProducts);
router.get('/products/:id', getProductById);
router.post('/products/create', authenticación, createProduct);
router.put('/products/:id', authenticación, updateProduct);
router.delete('/products/:id', authenticación, deleteProduct);

export default router;  