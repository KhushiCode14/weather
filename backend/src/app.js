import express from "express";
import AuthRoutes from "./auth/AuthRoute.js";
import cors from "cors";
const app = express();
app.use(cors());
app.use(express.json());
app.use("/auth", AuthRoutes);
export default app;
