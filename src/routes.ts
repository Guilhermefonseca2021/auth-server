import { Router } from "express";
import { createUser } from "./controllers/authController";

const authRoutes = Router();

authRoutes.post("/register", createUser)

export { 
    authRoutes
}