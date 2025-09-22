import { createClient } from "@supabase/supabase-js";
import type { Context } from "../../types/types.js";
import 'dotenv/config';

export const getSupabaseUserByTokenService = async (token: string, c: Context) => {
  try {
    if (!token) return null;

    const cleanToken = token.startsWith("Bearer ") ? token.split(" ")[1] : token;

    const supabaseUrl = process.env.SUPABASE_URL;
    const supabaseKey = process.env.SUPABASE_ANON_KEY;

    if (!supabaseUrl || !supabaseKey) {
      throw new Error('Faltando SUPABASE_URL ou SUPABASE_ANON_KEY no .env');
    }

    const supabase = createClient(supabaseUrl, supabaseKey);

    const { data, error } = await supabase.auth.getUser(cleanToken);

    if (error || !data.user) {
      return null;
    }

    return data.user;
  } catch (err) {
    console.error("Erro em getSupabaseUserByTokenService:", err);
    return null;
  }
};
