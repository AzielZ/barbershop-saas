import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Dashboard() {
  const navigation = useNavigation();

  const mockAppointments = [
    { id: 1, service: 'Corte de Cabelo', date: '2024-01-20', time: '14:00' },
    { id: 2, service: 'Barba', date: '2024-01-22', time: '15:30' },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Meus Agendamentos</Text>
        <TouchableOpacity 
          style={styles.newButton}
          onPress={() => navigation.navigate('NewAppointment')}
        >
          <Text style={styles.newButtonText}>+ Novo</Text>
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.appointmentList}>
        {mockAppointments.map(appointment => (
          <View key={appointment.id} style={styles.appointmentCard}>
            <Text style={styles.serviceName}>{appointment.service}</Text>
            <Text style={styles.dateTime}>
              {appointment.date} às {appointment.time}
            </Text>
            <TouchableOpacity 
              style={styles.detailsButton}
              onPress={() => navigation.navigate('AppointmentDetails', { id: appointment.id })}
            >
              <Text style={styles.detailsButtonText}>Ver Detalhes</Text>
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>

      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.navButton}>
          <Text style={styles.navButtonText}>Agenda</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={styles.navButton}
          onPress={() => navigation.navigate('Profile')}
        >
          <Text style={styles.navButtonText}>Perfil</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  newButton: {
    backgroundColor: '#000',
    padding: 10,
    borderRadius: 8,
  },
  newButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  appointmentList: {
    flex: 1,
    padding: 20,
  },
  appointmentCard: {
    backgroundColor: '#f5f5f5',
    padding: 15,
    borderRadius: 8,
    marginBottom: 15,
  },
  serviceName: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 5,
  },
  dateTime: {
    fontSize: 16,
    color: '#666',
    marginBottom: 10,
  },
  detailsButton: {
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 8,
    alignItems: 'center',
  },
  detailsButtonText: {
    color: '#000',
    fontSize: 16,
    fontWeight: '500',
  },
  bottomNav: {
    flexDirection: 'row',
    borderTopWidth: 1,
    borderTopColor: '#f0f0f0',
    paddingVertical: 15,
  },
  navButton: {
    flex: 1,
    alignItems: 'center',
  },
  navButtonText: {
    fontSize: 16,
    color: '#000',
  },
});