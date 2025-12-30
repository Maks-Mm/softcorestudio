//backend/src/config/db.ts

import express from "express";
import cors from "cors";
import authRoutes from "./routes/auth.routes";

const app = express();

// CORS configuration
app.use(cors({
  origin: [
    "http://localhost:3000",                
    "https://softcorestudio.vercel.app"     
  ],
  credentials: true
}));

// Parse JSON
app.use(express.json());

// Routes
app.use("/api/auth", authRoutes);

export default app;
