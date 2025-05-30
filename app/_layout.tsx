import { useEffect } from 'react';
import { Stack } from 'expo-router';
import { AuthProvider } from '../context/auth';
import { StatusBar } from 'expo-status-bar';

export default function RootLayout() {
  return (
    <AuthProvider>
      <StatusBar style="dark" />
      <Stack
        screenOptions={{
          headerShown: false,
          contentStyle: { backgroundColor: 'white' },
        }}
      />
    </AuthProvider>
  );
}
