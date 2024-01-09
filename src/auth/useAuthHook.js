import { useState, useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './Firebase'

export function useAuth() {
  const [user, setUser] = useState();
  useEffect(() => {
    const unsubFromAuthStatusChanged = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(undefined)
      }
    });
    return unsubFromAuthStatusChanged;
  }, []);
  return { user };
}
