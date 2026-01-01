//backend/src/seed.ts

import dotenv from "dotenv";
dotenv.config();

import mongoose from "mongoose";
import bcrypt from "bcrypt";
import User from "./models/User";

const MONGO_URI = process.env.MONGO_URI!;

async function seed() {
  await mongoose.connect(MONGO_URI);

  const email = "maxfila@gmail.com";

  const existing = await User.findOne({ email });
  if (existing) {
    console.log("User already exists. Skipping seed.");
    process.exit(0);
  }

  const hashed = await bcrypt.hash("qwe1234", 10);

  await User.create({
    email,
    username: "Max",
    password: hashed,
  });

  console.log("✅ User added");
  process.exit(0);
}

seed();
