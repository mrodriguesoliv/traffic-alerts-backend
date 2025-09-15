import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.SUPABASE_URL!;
const supabaseAnonKey = process.env.SUPABASE_ANON_KEY!;
const supabase = createClient(supabaseUrl, supabaseAnonKey);

export const loginService = async (email: string, password: string): Promise<string | null> => {
  try {
    const { data, error } = await supabase.auth.signInWithPassword({ email, password });

    if (error || !data.session) {
      return null;
    }

    return data.session.access_token;
  } catch (err) {
    console.error("Erro no loginService:", err);
    return null;
  }
};
