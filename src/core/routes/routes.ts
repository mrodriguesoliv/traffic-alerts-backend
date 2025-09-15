// routes.ts (dashboard ou auth)
import { Hono } from 'hono';
import { loginController } from '../auth/login/controllers/auth.controller';
import { getDashboardController } from '../dashboard/controllers/dashboard.controller';
import { authGuard } from '../auth/guard/auth.guard';

export const authRoutes = new Hono();
export const dashboardRoutes = new Hono();

authRoutes.post('/', loginController);
dashboardRoutes.get('/', authGuard(), getDashboardController);
