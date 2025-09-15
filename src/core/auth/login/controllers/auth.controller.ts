import { Context } from "hono";
import { loginService } from "../services/auth.service";

export const loginController = async (c: Context) => {
  try {
    const { email, password } = await c.req.json();

    if (!email || !password) {
      return c.json({ message: "Email e senha são obrigatórios" }, 400);
    }

    const token = await loginService(email, password);

    if (!token) {
      return c.json({ message: "Email ou senha inválidos" }, 401);
    }

    return c.json({ token });
  } catch (err) {
    console.error(err);
    return c.json({ message: "Erro ao fazer login" }, 500);
  }
};
