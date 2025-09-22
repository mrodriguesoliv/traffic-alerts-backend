import { getDashboardService } from "../services/dashboard.service";
export const getDashboardController = async (c) => {
    try {
        const data = await getDashboardService(c);
        return c.json(data);
    }
    catch (err) {
        return c.json({ error: err.message }, 500);
    }
};
