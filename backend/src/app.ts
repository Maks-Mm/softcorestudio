//backend/src/app.ts

import express from "express";
import cors from "cors";
import authRoutes from "./routes/auth.routes";

const app = express();

// Parse JSON (CRITICAL)
app.use(express.json());
// CORS
app.use(
  cors({
    origin: [
      "http://localhost:3000",
      "https://softcorestudio.vercel.app",
    ],
    credentials: true,
  })
);


// Routes
app.use("/api/auth", authRoutes);

export default app;
