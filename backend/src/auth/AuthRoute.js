import express from "express";
import { signupController, loginController } from "./AuthController.js";
const AuthRoutes = express.Router();

AuthRoutes.post("/login", loginController);
AuthRoutes.post("/signup", signupController);
export default AuthRoutes;
