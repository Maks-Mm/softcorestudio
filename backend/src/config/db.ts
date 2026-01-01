//backend/src/config/db.ts

import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI!);

    mongoose.connection.once("open", () => {
  console.log("🟢 Mongoose ready for writes");
});


    console.log("✅ MongoDB connected");
    console.log("📦 DB NAME:", mongoose.connection.name);
  } catch (err) {
    console.error("❌ MongoDB error", err);
    process.exit(1);
  }
};

