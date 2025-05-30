import { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, KeyboardAvoidingView, Platform } from 'react-native';
import { useRouter } from 'expo-router';
import { Mail, Lock } from 'lucide-react-native';
import { useAuth } from '../../context/auth';

export default function Login() {
  const router = useRouter();
  const { signIn } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async () => {
    try {
      setError('');
      await signIn(email, password);
      router.replace('/(tabs)');
    } catch (error) {
      console.error('Login failed:', error);
      setError('Invalid email or password');
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      className="flex-1 bg-white"
    >
      <View className="flex-1 justify-center px-8">
        <Text className="text-4xl font-bold text-center mb-8 text-primary-600">
          Barbershop
        </Text>

        <View className="space-y-4">
          {error ? (
            <Text className="text-red-500 text-center">{error}</Text>
          ) : null}

          <View className="relative">
            <Mail className="absolute top-3 left-3 text-gray-400" size={20} />
            <TextInput
              className="bg-gray-100 px-10 py-3 rounded-lg"
              placeholder="Email"
              value={email}
              onChangeText={setEmail}
              autoCapitalize="none"
              keyboardType="email-address"
            />
          </View>

          <View className="relative">
            <Lock className="absolute top-3 left-3 text-gray-400" size={20} />
            <TextInput
              className="bg-gray-100 px-10 py-3 rounded-lg"
              placeholder="Password"
              value={password}
              onChangeText={setPassword}
              secureTextEntry
            />
          </View>

          <TouchableOpacity
            className="bg-primary-600 py-3 rounded-lg"
            onPress={handleLogin}
          >
            <Text className="text-white text-center font-semibold">
              Sign In
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => router.push('/(auth)/register')}
          >
            <Text className="text-primary-600 text-center">
              Don't have an account? Sign Up
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}