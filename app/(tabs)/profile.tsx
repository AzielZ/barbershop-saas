import { View, Text, ScrollView, TouchableOpacity, Switch } from 'react-native';
import { useRouter } from 'expo-router';
import { User, MapPin, Mail, Phone, Bell, Moon, LogOut } from 'lucide-react-native';
import { useState } from 'react';

export default function Profile() {
  const router = useRouter();
  const [notifications, setNotifications] = useState(true);
  const [darkMode, setDarkMode] = useState(false);

  const user = {
    name: 'John Doe',
    email: 'john@example.com',
    phone: '+1 234 567 8900',
    address: {
      street: '123 Main St',
      number: '42',
      complement: 'Apt 4B',
      neighborhood: 'Downtown',
      city: 'New York',
      state: 'NY',
      zipCode: '10001'
    }
  };

  const handleLogout = async () => {
    try {
      // TODO: Implement logout logic
      router.replace('/(auth)/login');
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };

  return (
    <ScrollView className="flex-1 bg-white">
      <View className="px-6 pt-12">
        <Text className="text-2xl font-bold text-gray-900">Profile</Text>

        <View className="mt-6 bg-primary-50 rounded-xl p-6">
          <View className="items-center">
            <View className="w-20 h-20 bg-primary-200 rounded-full items-center justify-center">
              <User size={40} className="text-primary-600" />
            </View>
            <Text className="mt-4 text-xl font-semibold text-gray-900">{user.name}</Text>
            <Text className="text-gray-600">{user.email}</Text>
          </View>

          <TouchableOpacity
            className="mt-4 bg-primary-600 py-2 rounded-lg"
            onPress={() => router.push('/profile/edit')}
          >
            <Text className="text-white text-center font-medium">Edit Profile</Text>
          </TouchableOpacity>
        </View>

        <View className="mt-6 space-y-6">
          <View>
            <Text className="text-lg font-semibold text-gray-900 mb-4">Contact Information</Text>
            <View className="space-y-4">
              <View className="flex-row items-center">
                <Mail size={20} className="text-gray-400" />
                <Text className="ml-3 text-gray-600">{user.email}</Text>
              </View>
              <View className="flex-row items-center">
                <Phone size={20} className="text-gray-400" />
                <Text className="ml-3 text-gray-600">{user.phone}</Text>
              </View>
            </View>
          </View>

          <View>
            <Text className="text-lg font-semibold text-gray-900 mb-4">Address</Text>
            <View className="flex-row items-start">
              <MapPin size={20} className="text-gray-400" />
              <View className="ml-3">
                <Text className="text-gray-600">{user.address.street}, {user.address.number}</Text>
                {user.address.complement && (
                  <Text className="text-gray-600">{user.address.complement}</Text>
                )}
                <Text className="text-gray-600">
                  {user.address.neighborhood}, {user.address.city}, {user.address.state} {user.address.zipCode}
                </Text>
              </View>
            </View>
          </View>

          <View>
            <Text className="text-lg font-semibold text-gray-900 mb-4">Preferences</Text>
            <View className="space-y-4">
              <View className="flex-row items-center justify-between">
                <View className="flex-row items-center">
                  <Bell size={20} className="text-gray-400" />
                  <Text className="ml-3 text-gray-600">Push Notifications</Text>
                </View>
                <Switch
                  value={notifications}
                  onValueChange={setNotifications}
                  trackColor={{ false: '#d1d5db', true: '#0284c7' }}
                />
              </View>

              <View className="flex-row items-center justify-between">
                <View className="flex-row items-center">
                  <Moon size={20} className="text-gray-400" />
                  <Text className="ml-3 text-gray-600">Dark Mode</Text>
                </View>
                <Switch
                  value={darkMode}
                  onValueChange={setDarkMode}
                  trackColor={{ false: '#d1d5db', true: '#0284c7' }}
                />
              </View>
            </View>
          </View>

          <TouchableOpacity
            className="flex-row items-center justify-center py-3 bg-red-50 rounded-lg mt-6"
            onPress={handleLogout}
          >
            <LogOut size={20} className="text-red-600" />
            <Text className="ml-2 text-red-600 font-medium">Log Out</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}