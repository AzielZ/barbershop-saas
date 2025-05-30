import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { useLocalSearchParams, useRouter, Stack } from 'expo-router';
import { ChevronLeft, Clock, DollarSign, Scissors } from 'lucide-react-native';

const services = {
  '1': {
    id: '1',
    name: 'Classic Haircut',
    description: 'Traditional haircut with scissors and clippers, includes consultation, washing, cutting, and styling.',
    price: 30,
    duration: 30,
    features: [
      'Professional consultation',
      'Hair wash and scalp massage',
      'Precision cutting',
      'Style finishing',
      'Product recommendations'
    ]
  },
  // Add more services as needed
};

export default function ServiceDetails() {
  const { id } = useLocalSearchParams();
  const router = useRouter();
  const service = services[id as keyof typeof services];

  if (!service) {
    return (
      <View className="flex-1 bg-white items-center justify-center">
        <Text className="text-gray-900">Service not found</Text>
        <TouchableOpacity
          className="mt-4 bg-primary-600 px-6 py-2 rounded-lg"
          onPress={() => router.back()}
        >
          <Text className="text-white font-medium">Go Back</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View className="flex-1 bg-white">
      <Stack.Screen
        options={{
          headerShown: true,
          headerTitle: '',
          headerLeft: () => (
            <TouchableOpacity onPress={() => router.back()}>
              <ChevronLeft size={24} className="text-gray-900" />
            </TouchableOpacity>
          ),
        }}
      />

      <ScrollView className="flex-1">
        <View className="px-6">
          <View className="mt-4 items-center">
            <View className="w-20 h-20 bg-primary-100 rounded-full items-center justify-center">
              <Scissors size={40} className="text-primary-600" />
            </View>
          </View>

          <View className="mt-6">
            <Text className="text-3xl font-bold text-gray-900 text-center">
              {service.name}
            </Text>

            <View className="flex-row justify-center space-x-6 mt-4">
              <View className="flex-row items-center">
                <Clock size={20} className="text-gray-400" />
                <Text className="text-gray-600 ml-2">{service.duration}min</Text>
              </View>

              <View className="flex-row items-center">
                <DollarSign size={20} className="text-gray-400" />
                <Text className="text-gray-600 ml-2">${service.price}</Text>
              </View>
            </View>
          </View>

          <View className="mt-8">
            <Text className="text-lg font-semibold text-gray-900 mb-2">
              Description
            </Text>
            <Text className="text-gray-600 leading-6">
              {service.description}
            </Text>
          </View>

          <View className="mt-8">
            <Text className="text-lg font-semibold text-gray-900 mb-4">
              What's Included
            </Text>
            <View className="space-y-3">
              {service.features.map((feature, index) => (
                <View key={index} className="flex-row items-center">
                  <View className="w-2 h-2 bg-primary-600 rounded-full" />
                  <Text className="text-gray-600 ml-3">{feature}</Text>
                </View>
              ))}
            </View>
          </View>

          <TouchableOpacity
            className="mt-8 mb-6 bg-primary-600 py-4 rounded-xl"
            onPress={() => router.push(`/appointments/new?serviceId=${service.id}`)}
          >
            <Text className="text-white text-center font-semibold text-lg">
              Book Now
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}