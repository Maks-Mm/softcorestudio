import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth, Auth } from "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};

// Initialize Firebase only on client side
let app: ReturnType<typeof initializeApp> | null = null;
let auth: Auth | null = null;

if (typeof window !== 'undefined') {
  // Client-side only
  try {
    app = getApps().length > 0 ? getApp() : initializeApp(firebaseConfig);
    auth = getAuth(app);
  } catch (error) {
    console.error('Firebase initialization error:', error);
  }
}

export { auth };

// Helper function to get auth safely
export const getAuthInstance = (): Auth | null => {
  if (typeof window === 'undefined') {
    return null;
  }
  
  if (!auth) {
    try {
      app = getApps().length > 0 ? getApp() : initializeApp(firebaseConfig);
      auth = getAuth(app);
    } catch (error) {
      console.error('Firebase initialization error:', error);
      return null;
    }
  }
  
  return auth;
};

// Helper function to check if Firebase is available
export const isFirebaseAvailable = (): boolean => {
  return typeof window !== 'undefined' && auth !== null;
};