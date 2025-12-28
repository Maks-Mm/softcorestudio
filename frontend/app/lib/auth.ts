// app/lib/auth.ts
import { RecaptchaVerifier } from "firebase/auth";

declare global {
  interface Window {
    recaptchaVerifier?: RecaptchaVerifier;
  }
}
export const signInWithEmail = async (_email: string, _password: string) => {
  return { user: null, error: { message: "Email login coming soon." } };
};

export const signInWithGoogle = async () => {
  return { user: null, error: { message: "Google login coming soon." } };
};

export const signInWithGitHub = async () => {
  return { user: null, error: { message: "GitHub login coming soon." } };
};

export const signOutUser = async () => {
  return { success: false, error: { message: "Sign out coming soon." } };
};

export const getCurrentUser = async () => null;
export const getCurrentUserSync = () => null;
