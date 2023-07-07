import { authRequired } from "../middlewares.js";
import { Router } from 'express';
import {
    registerUser,
    listUsers
} from '../controllers/user.controller.js'

const router = Router();

// router.post('/register', registerUser)
router.get('/users', listUsers)

export default router;