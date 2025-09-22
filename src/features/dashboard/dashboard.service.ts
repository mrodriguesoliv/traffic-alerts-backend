import axios from "axios";
import type { Context } from 'hono';
import { dashboardMock } from "./mocks/dashboard.mock";

const USE_MOCK = process.env.USE_MOCK === "true";

export const getDashboardService = async (c: Context) => {
  if (USE_MOCK) {
    return { alerts: dashboardMock };
  }

  const API_KEY = process.env.RAPIDAPI_KEY;
  const API_HOST = process.env.RAPIDAPI_HOST;

  const options = {
    method: "GET",
    url: `https://${API_HOST}/alerts-and-jams`,
    params: {
      bottom_left: "-21.265,-47.781",
      top_right: "-21.139,-47.882",
      max_alerts: "2",
      max_jams: "2",
    },
    headers: {
      "x-rapidapi-key": API_KEY,
      "x-rapidapi-host": API_HOST,
    },
  };

  try {
    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    console.error("Erro na API real:", error);
    throw new Error("Erro ao buscar dados do dashboard");
  }
};
