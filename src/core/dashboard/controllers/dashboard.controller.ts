import type { Context } from 'hono';
import { getDashboardService } from "../services/dashboard.service";

export const getDashboardController = async (c: Context) => {
  try {
    const data = await getDashboardService(c);
    return c.json(data);
  } catch (err: any) {
    return c.json({ error: err.message }, 500);
  }
};
