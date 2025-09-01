// index.ts
import { serve } from '@hono/node-server';
import { Hono } from 'hono';
import { cors } from 'hono/cors';
import axios from 'axios';
import 'dotenv/config';

const app = new Hono();
app.use(cors());

app.get('/alerts', async (c) => {
  const API_KEY = c.req.query('api_key') || process.env.RAPIDAPI_KEY;
  const API_HOST = c.req.query('api_host') || process.env.RAPIDAPI_HOST;

  console.log('Usando API_KEY:', API_KEY);
  console.log('Usando API_HOST:', API_HOST);

  const options = {
    method: 'GET',
    url: `https://${API_HOST}/alerts-and-jams`,
    params: {
      bottom_left: '-21.265,-47.781',
      top_right: '-21.139,-47.882',
      max_alerts: '20',
      max_jams: '20'
    },
    headers: {
      'x-rapidapi-key': API_KEY,
      'x-rapidapi-host': API_HOST
    }
  };

  try {
    const response = await axios.request(options);
    
    return c.json(response.data);

  } catch (error) {
    console.error('Um erro ocorreu durante a requisição da API:', error);
    return c.json({ error: 'DEU ERRO' }, 500);
  }
});

serve({
  fetch: app.fetch,
  port: 3000
});