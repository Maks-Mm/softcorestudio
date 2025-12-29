//backend/src/config/db.ts

import express from "express";
import cors from "cors";
import authRoutes from "./routes/auth.routes";

const app = express();

app.use(cors({
  origin: [
    "http://localhost:3000",
    "https://your-vercel-app.vercel.app"
  ],
  credentials: true
}));

app.use(express.json());

app.use("/api/auth", authRoutes);

export default app;
