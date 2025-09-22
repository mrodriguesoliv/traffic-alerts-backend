import { Hono } from "hono";
import { loginController } from "./auth.controller.js";

export const authRoutes = new Hono();

authRoutes.post("/login", loginController);
