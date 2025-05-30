import { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import { Calendar, Clock, MapPin, User } from 'lucide-react-native';

const APPOINTMENT_STATUS = {
  PENDING: 'bg-yellow-100 text-yellow-800',
  CONFIRMED: 'bg-green-100 text-green-800',
  CANCELLED: 'bg-red-100 text-red-800',
  COMPLETED: 'bg-gray-100 text-gray-800',
};

const appointments = [
  {
    id: '1',
    service: 'Classic Haircut',
    date: new Date('2024-02-20T10:00:00'),
    status: 'CONFIRMED',
    barber: 'John Doe',
    duration: 30,
  },
  {
    id: '2',
    service: 'Beard Trim',
    date: new Date('2024-02-22T14:30:00'),
    status: 'PENDING',
    barber: 'Jane Smith',
    duration: 20,
  },
];

export default function Appointments() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState('upcoming'); // 'upcoming' or 'past'

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('en-US', {
      weekday: 'short',
      month: 'short',
      day: 'numeric',
    });
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('en-US', {
      hour: 'numeric',
      minute: '2-digit',
    });
  };

  return (
    <View className="flex-1 bg-white">
      <View className="px-6 pt-12">
        <Text className="text-2xl font-bold text-gray-900">Appointments</Text>

        <View className="flex-row mt-4 bg-gray-100 rounded-lg p-1">
          <TouchableOpacity
            className={`flex-1 py-2 rounded-md ${activeTab === 'upcoming' ? 'bg-white shadow' : ''}`}
            onPress={() => setActiveTab('upcoming')}
          >
            <Text
              className={`text-center font-medium ${activeTab === 'upcoming' ? 'text-primary-600' : 'text-gray-600'}`}
            >
              Upcoming
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            className={`flex-1 py-2 rounded-md ${activeTab === 'past' ? 'bg-white shadow' : ''}`}
            onPress={() => setActiveTab('past')}
          >
            <Text
              className={`text-center font-medium ${activeTab === 'past' ? 'text-primary-600' : 'text-gray-600'}`}
            >
              Past
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView className="flex-1 px-6 mt-6">
        <View className="space-y-4">
          {appointments.map((appointment) => (
            <TouchableOpacity
              key={appointment.id}
              className="bg-white rounded-xl p-4 border border-gray-100 shadow-sm"
              onPress={() => router.push(`/appointments/${appointment.id}`)}
            >
              <View className="flex-row justify-between items-start">
                <Text className="text-lg font-semibold text-gray-900">
                  {appointment.service}
                </Text>
                <View className={`px-3 py-1 rounded-full ${APPOINTMENT_STATUS[appointment.status]}`}>
                  <Text className="text-sm font-medium">{appointment.status}</Text>
                </View>
              </View>

              <View className="mt-4 space-y-2">
                <View className="flex-row items-center">
                  <Calendar size={16} className="text-gray-400" />
                  <Text className="text-gray-600 ml-2">
                    {formatDate(appointment.date)} at {formatTime(appointment.date)}
                  </Text>
                </View>

                <View className="flex-row items-center">
                  <Clock size={16} className="text-gray-400" />
                  <Text className="text-gray-600 ml-2">
                    {appointment.duration} minutes
                  </Text>
                </View>

                <View className="flex-row items-center">
                  <User size={16} className="text-gray-400" />
                  <Text className="text-gray-600 ml-2">
                    {appointment.barber}
                  </Text>
                </View>
              </View>

              {appointment.status === 'CONFIRMED' && (
                <TouchableOpacity
                  className="mt-4 bg-red-50 py-2 rounded-lg"
                  onPress={() => {
                    // TODO: Implement cancellation logic
                  }}
                >
                  <Text className="text-red-600 text-center font-medium">
                    Cancel Appointment
                  </Text>
                </TouchableOpacity>
              )}
            </TouchableOpacity>
          ))}
        </View>

        <TouchableOpacity
          className="bg-primary-600 rounded-xl p-4 flex-row items-center justify-center my-6"
          onPress={() => router.push('/appointments/new')}
        >
          <Calendar size={24} color="white" />
          <Text className="text-white font-semibold text-lg ml-2">
            Book New Appointment
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}