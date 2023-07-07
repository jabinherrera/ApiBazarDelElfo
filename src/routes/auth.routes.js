import express from "express";
import { register, login, currentUser} from "../controllers/auth.user.controller.js";

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.get("/currentUser", currentUser);

export default router;