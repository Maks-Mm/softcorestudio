//backend/src/models/User.ts

import mongoose, { Document } from "mongoose";

export interface IUser extends Document {
  email: string;
  password: string;
  username?: string;
}

const UserSchema = new mongoose.Schema<IUser>(
  {
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    password: { type: String, required: true },
    username: { type: String },
  },
  { timestamps: true }
);

const User =
  mongoose.models.User ||
  mongoose.model<IUser>("User", UserSchema);

export default User;


