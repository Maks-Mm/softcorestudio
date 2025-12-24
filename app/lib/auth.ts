// app/lib/auth.ts
import { 
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  GithubAuthProvider,
  signInWithPhoneNumber,
  RecaptchaVerifier
} from 'firebase/auth';
import { auth } from './firebase';
import { signOut as firebaseSignOut } from 'firebase/auth';


export const signOutUser = async () => {
  try {
    await firebaseSignOut(auth);
    return { success: true, error: null };
  } catch (error: any) {
    return { success: false, error: { message: error.message } };
  }
};

// Email/Password Auth
export const signInWithEmail = async (email: string, password: string) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    return { user: userCredential.user, error: null };
  } catch (error: any) {
    return { user: null, error: { message: error.message } };
  }
};

export const signUpWithEmail = async (email: string, password: string) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    return { user: userCredential.user, error: null };
  } catch (error: any) {
    return { user: null, error: { message: error.message } };
  }
};

// Google Auth
export const signInWithGoogle = async () => {
  try {
    const provider = new GoogleAuthProvider();
    const userCredential = await signInWithPopup(auth, provider);
    return { user: userCredential.user, error: null };
  } catch (error: any) {
    return { user: null, error: { message: error.message } };
  }
};

// GitHub Auth
export const signInWithGitHub = async () => {
  try {
    const provider = new GithubAuthProvider();
    const userCredential = await signInWithPopup(auth, provider);
    return { user: userCredential.user, error: null };
  } catch (error: any) {
    return { user: null, error: { message: error.message } };
  }
};

// Phone Auth (simplified - you'll need to implement the full flow)
export const initiatePhoneAuth = async (phoneNumber: string) => {
  try {
    // You need to setup recaptcha first
    const appVerifier = new RecaptchaVerifier(auth, 'recaptcha-container', {
      size: 'invisible',
      callback: () => {
        // reCAPTCHA solved
      }
    });
    
    const confirmationResult = await signInWithPhoneNumber(auth, phoneNumber, appVerifier);
    return { confirmationResult, error: null };
  } catch (error: any) {
    return { confirmationResult: null, error: { message: error.message } };
  }
};