import type { Context, Next } from "../../types/types.js";
import { getSupabaseUserByTokenService } from "./guard.service.js";


export const authGuard = () => {
  return async (c: Context, next: Next) => {
    try {
      const authHeader = c.req.header("Authorization") || c.req.param("wsAccessToken");

      if (!authHeader) {
        return c.json({ message: "Token não fornecido" }, 403);
      }

      const supabaseUserData = await getSupabaseUserByTokenService(authHeader, c);

      if (!supabaseUserData) {
        return c.json({ message: "Token inválido ou expirado" }, 403);
      }

      c.set("userRequest", supabaseUserData);

      return next();
    } catch (err) {
      console.error(err);
      return c.json({ message: "Erro ao validar token" }, 500);
    }
  };
};
