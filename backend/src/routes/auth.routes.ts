import express, { type Request, type Response } from "express";
import loginController from "../controllers/auth/login.controller";
import logoutController from "../controllers/auth/logout.controller";
import registerController from "../controllers/auth/register.controller";

const router = express.Router();

router.post("/login", loginController)
router.post("/logout", logoutController)
router.post("/register", registerController)

export default router;