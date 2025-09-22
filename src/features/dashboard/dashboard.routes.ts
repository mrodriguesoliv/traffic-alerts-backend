import { Hono } from 'hono';
import { getDashboardController } from './dashboard.controller';
import { authGuard } from '../auth/auth.guard';

export const dashboardRoutes = new Hono();

dashboardRoutes.get('/', authGuard(), getDashboardController);
