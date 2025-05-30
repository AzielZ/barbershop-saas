import { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, KeyboardAvoidingView, Platform, ScrollView } from 'react-native';
import { useRouter } from 'expo-router';
import { Mail, Lock, User, Phone, MapPin } from 'lucide-react-native';
import { useAuth } from '../../context/auth';

export default function Register() {
  const router = useRouter();
  const { signUp } = useAuth();
  const [error, setError] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    phone: '',
    address: {
      street: '',
      number: '',
      complement: '',
      neighborhood: '',
      city: '',
      state: '',
      zipCode: ''
    }
  });

  const handleRegister = async () => {
    try {
      setError('');
      await signUp(formData);
      router.replace('/(tabs)');
    } catch (error) {
      console.error('Registration failed:', error);
      setError('Registration failed. Please try again.');
    }
  };

  const updateFormData = (field: string, value: string) => {
    if (field.includes('.')) {
      const [parent, child] = field.split('.');
      setFormData(prev => ({
        ...prev,
        [parent]: {
          ...prev[parent],
          [child]: value
        }
      }));
    } else {
      setFormData(prev => ({ ...prev, [field]: value }));
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      className="flex-1 bg-white"
    >
      <ScrollView className="flex-1 px-8 pt-8">
        <Text className="text-4xl font-bold text-center mb-8 text-primary-600">
          Create Account
        </Text>

        <View className="space-y-4">
          {error ? (
            <Text className="text-red-500 text-center">{error}</Text>
          ) : null}

          <View className="relative">
            <User className="absolute top-3 left-3 text-gray-400" size={20} />
            <TextInput
              className="bg-gray-100 px-10 py-3 rounded-lg"
              placeholder="Name"
              value={formData.name}
              onChangeText={(value) => updateFormData('name', value)}
            />
          </View>

          <View className="relative">
            <Mail className="absolute top-3 left-3 text-gray-400" size={20} />
            <TextInput
              className="bg-gray-100 px-10 py-3 rounded-lg"
              placeholder="Email"
              value={formData.email}
              onChangeText={(value) => updateFormData('email', value)}
              autoCapitalize="none"
              keyboardType="email-address"
            />
          </View>

          <View className="relative">
            <Lock className="absolute top-3 left-3 text-gray-400" size={20} />
            <TextInput
              className="bg-gray-100 px-10 py-3 rounded-lg"
              placeholder="Password"
              value={formData.password}
              onChangeText={(value) => updateFormData('password', value)}
              secureTextEntry
            />
          </View>

          <View className="relative">
            <Phone className="absolute top-3 left-3 text-gray-400" size={20} />
            <TextInput
              className="bg-gray-100 px-10 py-3 rounded-lg"
              placeholder="Phone"
              value={formData.phone}
              onChangeText={(value) => updateFormData('phone', value)}
              keyboardType="phone-pad"
            />
          </View>

          <View className="space-y-4 mt-4">
            <Text className="text-lg font-semibold text-gray-700">Address</Text>

            <View className="relative">
              <MapPin className="absolute top-3 left-3 text-gray-400" size={20} />
              <TextInput
                className="bg-gray-100 px-10 py-3 rounded-lg"
                placeholder="Street"
                value={formData.address.street}
                onChangeText={(value) => updateFormData('address.street', value)}
              />
            </View>

            <View className="relative">
              <TextInput
                className="bg-gray-100 px-4 py-3 rounded-lg"
                placeholder="Number"
                value={formData.address.number}
                onChangeText={(value) => updateFormData('address.number', value)}
                keyboardType="numeric"
              />
            </View>

            <View className="relative">
              <TextInput
                className="bg-gray-100 px-4 py-3 rounded-lg"
                placeholder="Complement (optional)"
                value={formData.address.complement}
                onChangeText={(value) => updateFormData('address.complement', value)}
              />
            </View>

            <View className="relative">
              <TextInput
                className="bg-gray-100 px-4 py-3 rounded-lg"
                placeholder="Neighborhood"
                value={formData.address.neighborhood}
                onChangeText={(value) => updateFormData('address.neighborhood', value)}
              />
            </View>

            <View className="relative">
              <TextInput
                className="bg-gray-100 px-4 py-3 rounded-lg"
                placeholder="City"
                value={formData.address.city}
                onChangeText={(value) => updateFormData('address.city', value)}
              />
            </View>

            <View className="relative">
              <TextInput
                className="bg-gray-100 px-4 py-3 rounded-lg"
                placeholder="State"
                value={formData.address.state}
                onChangeText={(value) => updateFormData('address.state', value)}
              />
            </View>

            <View className="relative">
              <TextInput
                className="bg-gray-100 px-4 py-3 rounded-lg"
                placeholder="ZIP Code"
                value={formData.address.zipCode}
                onChangeText={(value) => updateFormData('address.zipCode', value)}
                keyboardType="numeric"
              />
            </View>
          </View>

          <TouchableOpacity
            className="bg-primary-600 py-3 rounded-lg mt-6"
            onPress={handleRegister}
          >
            <Text className="text-white text-center font-semibold">
              Sign Up
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => router.push('/(auth)/login')}
          >
            <Text className="text-primary-600 text-center">
              Already have an account? Sign In
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}