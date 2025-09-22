import 'dotenv/config';
import { serve } from '@hono/node-server';
import { Hono } from 'hono';
import { cors } from 'hono/cors';
import { authRoutes, dashboardRoutes } from './core/routes/routes';
const app = new Hono();
app.use(cors());
app.route('/auth', authRoutes);
app.route('/dashboard', dashboardRoutes);
serve({
    fetch: app.fetch,
    port: 3000
});
