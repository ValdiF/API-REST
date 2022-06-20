import express from "express";
import carsRoutes from "./routes/cars-routes.js"

const app = express();

app.use(express.json());

app.use(carsRoutes);
export default app;