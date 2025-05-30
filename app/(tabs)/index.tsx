import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native';
import { useRouter } from 'expo-router';
import { Calendar, Clock, DollarSign } from 'lucide-react-native';

const featuredServices = [
  {
    id: '1',
    name: 'Classic Haircut',
    price: 30,
    duration: 30,
    image: 'https://example.com/haircut.jpg'
  },
  {
    id: '2',
    name: 'Beard Trim',
    price: 20,
    duration: 20,
    image: 'https://example.com/beard.jpg'
  },
  // Add more services as needed
];

export default function Home() {
  const router = useRouter();

  return (
    <ScrollView className="flex-1 bg-white">
      <View className="px-6 pt-12">
        <Text className="text-2xl font-bold text-gray-900">Welcome back!</Text>
        <Text className="text-gray-600 mt-1">Book your next appointment</Text>

        <View className="mt-6">
          <Text className="text-lg font-semibold text-gray-900 mb-4">Featured Services</Text>
          
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            className="-mx-6 px-6"
          >
            {featuredServices.map((service) => (
              <TouchableOpacity
                key={service.id}
                className="mr-4 bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden"
                style={{ width: 280 }}
                onPress={() => router.push(`/services/${service.id}`)}
              >
                <View className="h-32 bg-gray-200">
                  {/* Placeholder for service image */}
                </View>
                
                <View className="p-4">
                  <Text className="text-lg font-semibold text-gray-900">{service.name}</Text>
                  
                  <View className="flex-row items-center mt-2 space-x-4">
                    <View className="flex-row items-center">
                      <Clock size={16} className="text-gray-400" />
                      <Text className="text-gray-600 ml-1">{service.duration}min</Text>
                    </View>
                    
                    <View className="flex-row items-center">
                      <DollarSign size={16} className="text-gray-400" />
                      <Text className="text-gray-600 ml-1">${service.price}</Text>
                    </View>
                  </View>
                </View>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>

        <View className="mt-8">
          <TouchableOpacity
            className="bg-primary-600 rounded-xl p-4 flex-row items-center justify-center"
            onPress={() => router.push('/appointments/new')}
          >
            <Calendar size={24} color="white" />
            <Text className="text-white font-semibold text-lg ml-2">
              Book Appointment
            </Text>
          </TouchableOpacity>
        </View>

        <View className="mt-8 mb-6">
          <Text className="text-lg font-semibold text-gray-900 mb-4">Recent Appointments</Text>
          
          {/* Placeholder for recent appointments */}
          <View className="bg-gray-50 rounded-xl p-4">
            <Text className="text-gray-600 text-center">
              No recent appointments
            </Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}
