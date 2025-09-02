// index.ts
import { serve } from '@hono/node-server';
import { Hono } from 'hono';
import { cors } from 'hono/cors';
import axios from 'axios';
import 'dotenv/config';

const app = new Hono();
app.use(cors());

const USE_MOCK = process.env.USE_MOCK === 'true';

app.get('/alerts', async (c) => {
  if (USE_MOCK) {
    const mockData = {
      alerts: [
        {
          id: "1",
          type: "ACCIDENT",
          location: { latitude: -21.200, longitude: -47.800 },
          description: "Acidente leve na Av. Paulista",
          time: Date.now()
        },
        {
          id: "2",
          type: "ROADWORK",
          location: { latitude: -21.205, longitude: -47.790 },
          description: "Obras na Rua XV de Novembro",
          time: Date.now() - 1000 * 60 * 30
        },
        {
          id: "3",
          type: "HEAVY_TRAFFIC",
          location: { latitude: -21.210, longitude: -47.795 },
          description: "Trânsito intenso na Marginal",
          time: Date.now() - 1000 * 60 * 10
        },
        {
          id: "4",
          type: "ROAD_CLOSED",
          location: { latitude: -21.215, longitude: -47.805 },
          description: "Rua fechada devido a evento",
          time: Date.now() - 1000 * 60 * 5
        },
        {
          id: "5",
          type: "WEATHER",
          location: { latitude: -21.220, longitude: -47.810 },
          description: "Chuvas fortes causando lentidão",
          time: Date.now() - 1000 * 60 * 60
        },
      ],
      jams: [
        {
          id: "101",
          speed: 5,
          line: [
            { latitude: -21.210, longitude: -47.810 },
            { latitude: -21.215, longitude: -47.820 },
            { latitude: -21.220, longitude: -47.830 }
          ]
        },
        {
          id: "102",
          speed: 15,
          line: [
            { latitude: -21.230, longitude: -47.835 },
            { latitude: -21.235, longitude: -47.840 }
          ]
        },
        {
          id: "103",
          speed: 0,
          line: [
            { latitude: -21.240, longitude: -47.845 },
            { latitude: -21.245, longitude: -47.850 },
            { latitude: -21.250, longitude: -47.855 }
          ]
        },
        {
          id: "104",
          speed: 8,
          line: [
            { latitude: -21.255, longitude: -47.860 },
            { latitude: -21.260, longitude: -47.865 }
          ]
        },
        {
          id: "105",
          speed: 20,
          line: [
            { latitude: -21.265, longitude: -47.870 },
            { latitude: -21.270, longitude: -47.875 },
            { latitude: -21.275, longitude: -47.880 }
          ]
        },
      ]
    };
    return c.json(mockData);
  }

  const API_KEY = c.req.query('api_key') || process.env.RAPIDAPI_KEY;
  const API_HOST = c.req.query('api_host') || process.env.RAPIDAPI_HOST;

  const options = {
    method: 'GET',
    url: `https://${API_HOST}/alerts-and-jams`,
    params: {
      bottom_left: '-21.265,-47.781',
      top_right: '-21.139,-47.882',
      max_alerts: '2',
      max_jams: '2'
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
    console.error('Erro na API real:', error);
    return c.json({ error: 'Error' }, 500);
  }
});

serve({
  fetch: app.fetch,
  port: 3000
});
