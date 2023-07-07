import { Router } from 'express';
import { authRequired } from "../middlewares.js";
import {
    createProduct,
    editProductById,
    deleteProductById,
    listProduct,
} from '../controllers/product.controller.js'

const router = Router();

router.post('/products', createProduct)
router.put('/products/:productId',authRequired,  editProductById)
router.delete('/products/:productId', authRequired, deleteProductById)
router.get('/products', listProduct)

export default router;