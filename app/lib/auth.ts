// app/lib/auth.ts
import { auth } from "./firebase";
import {
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  User
} from "firebase/auth";

export const googleProvider = new GoogleAuthProvider();

export const signInWithGoogle = async (): Promise<{ user: User | null; error: any }> => {
  try {
    const result = await signInWithPopup(auth, googleProvider);
    return { user: result.user, error: null };
  } catch (error) {
    return { user: null, error };
  }
};

export const signUpWithEmail = async (
  email: string,
  password: string
): Promise<{ user: User | null; error: any }> => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    return { user: res.user, error: null };
  } catch (error) {
    return { user: null, error };
  }
};

export const signInWithEmail = async (
  email: string,
  password: string
): Promise<{ user: User | null; error: any }> => {
  try {
    const res = await signInWithEmailAndPassword(auth, email, password);
    return { user: res.user, error: null };
  } catch (error) {
    return { user: null, error };
  }
};

export const signOutUser = async () => {
  try {
    await signOut(auth);
    return { error: null };
  } catch (error) {
    return { error };
  }
};
