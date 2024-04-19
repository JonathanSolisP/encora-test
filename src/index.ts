import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import { loadRoutes } from "./routes";
import { loadMiddlewares } from "./middleware";

dotenv.config();

const SERVER_PORT = parseInt(process.env.SERVER_PORT ?? '3000');
const app: Express = express();

loadMiddlewares(app)
loadRoutes(app);

app.listen(SERVER_PORT, () => {
    console.log(`Server listening on port ${SERVER_PORT}`)
});