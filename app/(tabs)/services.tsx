import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import { Clock, DollarSign } from 'lucide-react-native';

const services = [
  {
    id: '1',
    name: 'Classic Haircut',
    description: 'Traditional haircut with scissors and clippers',
    price: 30,
    duration: 30,
  },
  {
    id: '2',
    name: 'Beard Trim',
    description: 'Professional beard grooming and shaping',
    price: 20,
    duration: 20,
  },
  {
    id: '3',
    name: 'Hair & Beard Combo',
    description: 'Complete grooming package with haircut and beard trim',
    price: 45,
    duration: 45,
  },
  {
    id: '4',
    name: 'Kids Haircut',
    description: 'Gentle haircut service for children',
    price: 25,
    duration: 25,
  },
  {
    id: '5',
    name: 'Hot Towel Shave',
    description: 'Luxurious traditional straight razor shave',
    price: 35,
    duration: 30,
  },
];

export default function Services() {
  const router = useRouter();

  return (
    <ScrollView className="flex-1 bg-white">
      <View className="px-6 pt-12">
        <Text className="text-2xl font-bold text-gray-900">Our Services</Text>
        <Text className="text-gray-600 mt-1">Choose from our professional services</Text>

        <View className="mt-6 space-y-4">
          {services.map((service) => (
            <TouchableOpacity
              key={service.id}
              className="bg-white rounded-xl p-4 border border-gray-100 shadow-sm"
              onPress={() => router.push(`/services/${service.id}`)}
            >
              <Text className="text-lg font-semibold text-gray-900">{service.name}</Text>
              <Text className="text-gray-600 mt-1">{service.description}</Text>

              <View className="flex-row items-center justify-between mt-4">
                <View className="flex-row items-center space-x-4">
                  <View className="flex-row items-center">
                    <Clock size={16} className="text-gray-400" />
                    <Text className="text-gray-600 ml-1">{service.duration}min</Text>
                  </View>

                  <View className="flex-row items-center">
                    <DollarSign size={16} className="text-gray-400" />
                    <Text className="text-gray-600 ml-1">${service.price}</Text>
                  </View>
                </View>

                <TouchableOpacity
                  className="bg-primary-600 px-4 py-2 rounded-lg"
                  onPress={() => router.push(`/appointments/new?serviceId=${service.id}`)}
                >
                  <Text className="text-white font-medium">Book Now</Text>
                </TouchableOpacity>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </ScrollView>
  );
}