import express from "express";
import AuthRoutes from "./auth/AuthRoute.js";

const app = express();
app.use(express.json());
app.use("/auth", AuthRoutes);
export default app;
