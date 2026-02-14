import express, { type Request, type Response } from "express";
import loginController from "../controllers/auth/loginController";
import logoutController from "../controllers/auth/logoutController";
import registerController from "../controllers/auth/registerController";

const router = express.Router();

router.post("/login", loginController)
router.post("/logout", logoutController)
router.post("/register", registerController)

export default router;