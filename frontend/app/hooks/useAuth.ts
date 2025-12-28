// app/hooks/useAuth.ts
import { useState, useEffect } from 'react';
import { User } from 'firebase/auth';
import { getCurrentUser, getCurrentUserSync } from '../lib/auth';

export const useAuth = () => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const initializeAuth = async () => {
      try {
        const currentUserSync = getCurrentUserSync();
        if (currentUserSync) {
          setUser(currentUserSync as unknown as User); // safe cast
          setLoading(false);
          return;
        }

        const currentUser = await getCurrentUser();
        setUser(currentUser as unknown as User); // safe cast
      } catch (err: any) {
        console.error("Auth initialization error:", err);
        setUser(null);
      } finally {
        setLoading(false);
      }
    };

    initializeAuth();
  }, []);

  return { user, loading };
};
