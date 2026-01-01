// frontend/app/lib/auth.ts
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
   REGISTER
======================= */
export const registerUser = async (email: string, username: string, password: string) => {
  try {
    const res = await fetch(`${API_URL}/api/auth/register`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, username, password }),
    });

    const data = await res.json();

    if (!res.ok) {
      return { success: false, error: { message: data.error || "Registration failed" } };
    }

    return { success: true, error: null };
  } catch (err: any) {
    return { success: false, error: { message: err.message } };
  }
};

/* =======================
   LOGOUT
======================= */
export const signOutUser = async () => {
  localStorage.removeItem("authToken");
  return { success: true, error: null }; // ✅ returns object
};

/* =======================
   CURRENT USER
======================= */
export const getCurrentUserSync = () => {
  const token = localStorage.getItem("authToken");
  if (!token) return null;

  try {
    const payload = JSON.parse(atob(token.split(".")[1]));
    return { id: payload.id };
  } catch {
    return null;
  }
};

// OPTIONAL: async version for hooks if needed
export const getCurrentUser = async () => {
  return getCurrentUserSync();
};

/* =======================
   OAUTH PLACEHOLDERS
======================= */
export const signInWithGoogle = async () => {
  return { user: null, error: { message: "Google login not implemented yet" } };
};

export const signInWithGitHub = async () => {
  return { user: null, error: { message: "GitHub login not implemented yet" } };
};
