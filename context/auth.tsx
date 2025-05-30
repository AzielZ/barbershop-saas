import { createContext, useContext, useState, useEffect } from 'react';
import { useRouter, useSegments, useRootNavigationState } from 'expo-router';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { db } from '../lib/prisma';

type User = {
  id: string;
  name: string;
  email: string;
  role: string;
  phone?: string;
  address?: {
    street: string;
    number: string;
    complement?: string;
    neighborhood: string;
    city: string;
    state: string;
    zipCode: string;
  };
};

type AuthContextType = {
  user: User | null;
  isLoading: boolean;
  signIn: (email: string, password: string) => Promise<void>;
  signUp: (userData: any) => Promise<void>;
  signOut: () => Promise<void>;
  updateUser: (data: Partial<User>) => Promise<void>;
};

const AuthContext = createContext<AuthContextType | null>(null);

// This hook can be used to access the user info.
export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}

function useProtectedRoute(user: User | null) {
  const segments = useSegments();
  const router = useRouter();
  const navigationState = useRootNavigationState();

  useEffect(() => {
    if (!navigationState?.key) return;

    const inAuthGroup = segments[0] === '(auth)';

    if (!user && !inAuthGroup) {
      // Redirect to the sign-in page.
      router.replace('/(auth)/login');
    } else if (user && inAuthGroup) {
      // Redirect away from the sign-in page.
      router.replace('/(tabs)');
    }
  }, [user, segments, navigationState?.key]);
}

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useProtectedRoute(user);

  useEffect(() => {
    loadUser();
  }, []);

  async function loadUser() {
    try {
      const userJson = await AsyncStorage.getItem('user');
      if (userJson) {
        setUser(JSON.parse(userJson));
      }
    } catch (error) {
      console.error('Error loading user:', error);
    } finally {
      setIsLoading(false);
    }
  }

  async function signIn(email: string, password: string) {
    try {
      // TODO: Add proper password hashing and validation
      const user = await db.getUserByEmail(email);
      if (!user) throw new Error('User not found');
      
      // Store user in state and AsyncStorage
      setUser(user);
      await AsyncStorage.setItem('user', JSON.stringify(user));
    } catch (error) {
      throw error;
    }
  }

  async function signUp(userData: any) {
    try {
      // TODO: Add password hashing
      const user = await db.createUser(userData);
      setUser(user);
      await AsyncStorage.setItem('user', JSON.stringify(user));
    } catch (error) {
      throw error;
    }
  }

  async function signOut() {
    try {
      await AsyncStorage.removeItem('user');
      setUser(null);
    } catch (error) {
      console.error('Error signing out:', error);
      throw error;
    }
  }

  async function updateUser(data: Partial<User>) {
    try {
      if (!user?.id) throw new Error('No user logged in');
      
      const updatedUser = await db.updateUser(user.id, data);
      setUser(updatedUser);
      await AsyncStorage.setItem('user', JSON.stringify(updatedUser));
    } catch (error) {
      throw error;
    }
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        isLoading,
        signIn,
        signUp,
        signOut,
        updateUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}