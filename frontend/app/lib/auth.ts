// frontend/app/lib/auth.ts

import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getAuthInstance } from "./firebase";

const API_URL = process.env.NEXT_PUBLIC_API_URL!;

/* =======================
   EMAIL / PASSWORD LOGIN
======================= */
export const signInWithEmail = async (email: string, password: string) => {
  try {
    const res = await fetch(`${API_URL}/api/auth/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    const data = await res.json();

    if (!res.ok) {
      return { user: null, error: { message: data.error || "Login failed" } };
    }

    localStorage.setItem("authToken", data.token);

    return { user: { email }, token: data.token, error: null };
  } catch (err: any) {
    return { user: null, error: { message: err.message } };
  }
};

/* =======================
   GOOGLE LOGIN
======================= */
export const signInWithGoogle = async () => {
  try {
    const auth = getAuthInstance();
    if (!auth) {
      return { user: null, error: { message: "Firebase not initialized" } };
    }

    const provider = new GoogleAuthProvider();
    const result = await signInWithPopup(auth, provider);

    const firebaseUser = result.user;
    const idToken = await firebaseUser.getIdToken();

    const res = await fetch(`${API_URL}/api/auth/google`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ idToken }),
    });

    const data = await res.json();

    if (!res.ok) {
      return { user: null, error: { message: data.error || "Google login failed" } };
    }

    localStorage.setItem("authToken", data.token);

    return {
      user: {
        email: firebaseUser.email,
        name: firebaseUser.displayName,
      },
      token: data.token,
      error: null,
    };
  } catch (err: any) {
    return { user: null, error: { message: err.message } };
  }
};

/* =======================
   GITHUB (PLACEHOLDER)
======================= */
export const signInWithGitHub = async () => {
  return { user: null, error: { message: "GitHub login not implemented yet" } };
};

/* =======================
   LOGOUT
======================= */
export const signOutUser = async () => {
  localStorage.removeItem("authToken");
  return { success: true, error: null };
};

/* =======================
   CURRENT USER
======================= */
export const getCurrentUserSync = () => {
  const token = localStorage.getItem("authToken");
  if (!token) return null;

  try {
    const payload = JSON.parse(atob(token.split(".")[1]));
    return { id: payload.id, email: payload.email };
  } catch {
    return null;
  }
};

export const getCurrentUser = async () => {
  return getCurrentUserSync();
};
