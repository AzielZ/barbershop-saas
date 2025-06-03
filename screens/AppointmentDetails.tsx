import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

export default function AppointmentDetails() {
  const navigation = useNavigation();
  const route = useRoute();
  const appointmentId = route.params?.id;

  // Mock de dados do agendamento
  const appointmentDetails = {
    id: appointmentId,
    service: 'Corte de Cabelo',
    date: '20/01/2024',
    time: '14:00',
    barber: 'Carlos Silva',
    price: 'R$ 50,00',
    status: 'Confirmado'
  };

  const handleCancel = () => {
    Alert.alert(
      'Cancelar Agendamento',
      'Tem certeza que deseja cancelar este agendamento?',
      [
        {
          text: 'Não',
          style: 'cancel'
        },
        {
          text: 'Sim',
          onPress: () => {
            // Implementar lógica de cancelamento
            Alert.alert('Sucesso', 'Agendamento cancelado com sucesso!');
            navigation.navigate('Dashboard');
          }
        }
      ]
    );
  };

  const handleReschedule = () => {
    navigation.navigate('NewAppointment');
  };

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>Detalhes do Agendamento</Text>
        
        <View style={styles.infoRow}>
          <Text style={styles.label}>Serviço:</Text>
          <Text style={styles.value}>{appointmentDetails.service}</Text>
        </View>

        <View style={styles.infoRow}>
          <Text style={styles.label}>Data:</Text>
          <Text style={styles.value}>{appointmentDetails.date}</Text>
        </View>

        <View style={styles.infoRow}>
          <Text style={styles.label}>Horário:</Text>
          <Text style={styles.value}>{appointmentDetails.time}</Text>
        </View>

        <View style={styles.infoRow}>
          <Text style={styles.label}>Barbeiro:</Text>
          <Text style={styles.value}>{appointmentDetails.barber}</Text>
        </View>

        <View style={styles.infoRow}>
          <Text style={styles.label}>Valor:</Text>
          <Text style={styles.value}>{appointmentDetails.price}</Text>
        </View>

        <View style={styles.infoRow}>
          <Text style={styles.label}>Status:</Text>
          <Text style={[styles.value, styles.statusText]}>{appointmentDetails.status}</Text>
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity 
            style={styles.rescheduleButton}
            onPress={handleReschedule}
          >
            <Text style={styles.buttonText}>Remarcar</Text>
          </TouchableOpacity>

          <TouchableOpacity 
            style={styles.cancelButton}
            onPress={handleCancel}
          >
            <Text style={styles.buttonText}>Cancelar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  card: {
    backgroundColor: '#f5f5f5',
    borderRadius: 12,
    padding: 20,
    marginTop: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  label: {
    fontSize: 16,
    color: '#666',
    flex: 1,
  },
  value: {
    fontSize: 16,
    fontWeight: '500',
    flex: 2,
    textAlign: 'right',
  },
  statusText: {
    color: '#4CAF50',
    fontWeight: 'bold',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 30,
  },
  rescheduleButton: {
    backgroundColor: '#000',
    padding: 15,
    borderRadius: 8,
    flex: 1,
    marginRight: 10,
    alignItems: 'center',
  },
  cancelButton: {
    backgroundColor: '#ff3b30',
    padding: 15,
    borderRadius: 8,
    flex: 1,
    marginLeft: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});