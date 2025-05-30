import { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { useRouter, useLocalSearchParams, Stack } from 'expo-router';
import { Calendar, Clock, ChevronLeft, User } from 'lucide-react-native';

const timeSlots = [
  '09:00', '09:30', '10:00', '10:30', '11:00', '11:30',
  '13:00', '13:30', '14:00', '14:30', '15:00', '15:30',
  '16:00', '16:30', '17:00', '17:30'
];

const barbers = [
  { id: '1', name: 'John Doe', speciality: 'Senior Barber' },
  { id: '2', name: 'Jane Smith', speciality: 'Master Barber' },
  { id: '3', name: 'Mike Johnson', speciality: 'Beard Specialist' },
];

export default function NewAppointment() {
  const router = useRouter();
  const { serviceId } = useLocalSearchParams();
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState('');
  const [selectedBarber, setSelectedBarber] = useState('');

  const handleBookAppointment = async () => {
    try {
      // TODO: Implement appointment booking logic with Prisma
      router.push('/(tabs)/appointments');
    } catch (error) {
      console.error('Booking failed:', error);
    }
  };

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('en-US', {
      weekday: 'long',
      month: 'long',
      day: 'numeric',
    });
  };

  return (
    <View className="flex-1 bg-white">
      <Stack.Screen
        options={{
          headerShown: true,
          headerTitle: 'Book Appointment',
          headerLeft: () => (
            <TouchableOpacity onPress={() => router.back()}>
              <ChevronLeft size={24} className="text-gray-900" />
            </TouchableOpacity>
          ),
        }}
      />

      <ScrollView className="flex-1 px-6">
        <View className="mt-6">
          <Text className="text-lg font-semibold text-gray-900 mb-4">Select Date</Text>
          <View className="bg-gray-50 rounded-xl p-4">
            <Text className="text-gray-900 font-medium">
              {formatDate(selectedDate)}
            </Text>
            {/* TODO: Add date picker calendar component */}
          </View>
        </View>

        <View className="mt-6">
          <Text className="text-lg font-semibold text-gray-900 mb-4">Select Time</Text>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            className="-mx-6 px-6"
          >
            <View className="flex-row space-x-2">
              {timeSlots.map((time) => (
                <TouchableOpacity
                  key={time}
                  className={`px-4 py-2 rounded-lg ${selectedTime === time ? 'bg-primary-600' : 'bg-gray-100'}`}
                  onPress={() => setSelectedTime(time)}
                >
                  <Text
                    className={`font-medium ${selectedTime === time ? 'text-white' : 'text-gray-900'}`}
                  >
                    {time}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          </ScrollView>
        </View>

        <View className="mt-6">
          <Text className="text-lg font-semibold text-gray-900 mb-4">Select Barber</Text>
          <View className="space-y-3">
            {barbers.map((barber) => (
              <TouchableOpacity
                key={barber.id}
                className={`p-4 rounded-xl border ${selectedBarber === barber.id ? 'border-primary-600 bg-primary-50' : 'border-gray-200'}`}
                onPress={() => setSelectedBarber(barber.id)}
              >
                <View className="flex-row items-center">
                  <View className="w-12 h-12 bg-gray-200 rounded-full items-center justify-center">
                    <User size={24} className="text-gray-600" />
                  </View>
                  <View className="ml-3">
                    <Text className="font-semibold text-gray-900">{barber.name}</Text>
                    <Text className="text-gray-600">{barber.speciality}</Text>
                  </View>
                </View>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        <View className="mt-8 mb-6">
          <TouchableOpacity
            className={`py-3 rounded-xl ${selectedDate && selectedTime && selectedBarber ? 'bg-primary-600' : 'bg-gray-300'}`}
            onPress={handleBookAppointment}
            disabled={!selectedDate || !selectedTime || !selectedBarber}
          >
            <Text className="text-white text-center font-semibold text-lg">
              Confirm Booking
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}