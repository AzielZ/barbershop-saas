import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function NewAppointment() {
  const navigation = useNavigation();
  const [selectedService, setSelectedService] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);

  const services = [
    { id: 1, name: 'Corte de Cabelo', price: 'R$ 50,00', duration: '45 min' },
    { id: 2, name: 'Barba', price: 'R$ 35,00', duration: '30 min' },
    { id: 3, name: 'Corte + Barba', price: 'R$ 75,00', duration: '1h 15min' },
  ];

  const availableTimes = [
    '09:00', '10:00', '11:00', '14:00', '15:00', '16:00', '17:00'
  ];

  const handleConfirm = () => {
    if (!selectedService || !selectedDate || !selectedTime) {
      alert('Por favor, selecione todos os campos');
      return;
    }
    // Implementar lógica de confirmação do agendamento
    console.log('Agendamento:', { selectedService, selectedDate, selectedTime });
    navigation.navigate('Dashboard');
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.sectionTitle}>Escolha o Serviço</Text>
      <View style={styles.serviceList}>
        {services.map(service => (
          <TouchableOpacity
            key={service.id}
            style={[styles.serviceCard, selectedService?.id === service.id && styles.selectedCard]}
            onPress={() => setSelectedService(service)}
          >
            <Text style={styles.serviceName}>{service.name}</Text>
            <Text style={styles.serviceDetails}>{service.price} • {service.duration}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <Text style={styles.sectionTitle}>Escolha a Data</Text>
      <ScrollView horizontal style={styles.dateList} showsHorizontalScrollIndicator={false}>
        {[...Array(7)].map((_, index) => {
          const date = new Date();
          date.setDate(date.getDate() + index);
          const formattedDate = date.toLocaleDateString('pt-BR', { weekday: 'short', day: '2-digit', month: '2-digit' });
          return (
            <TouchableOpacity
              key={index}
              style={[styles.dateCard, selectedDate === formattedDate && styles.selectedCard]}
              onPress={() => setSelectedDate(formattedDate)}
            >
              <Text style={styles.dateText}>{formattedDate}</Text>
            </TouchableOpacity>
          );
        })}
      </ScrollView>

      <Text style={styles.sectionTitle}>Escolha o Horário</Text>
      <View style={styles.timeList}>
        {availableTimes.map((time, index) => (
          <TouchableOpacity
            key={index}
            style={[styles.timeCard, selectedTime === time && styles.selectedCard]}
            onPress={() => setSelectedTime(time)}
          >
            <Text style={styles.timeText}>{time}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <TouchableOpacity 
        style={styles.confirmButton}
        onPress={handleConfirm}
      >
        <Text style={styles.confirmButtonText}>Confirmar Agendamento</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 15,
  },
  serviceList: {
    marginBottom: 20,
  },
  serviceCard: {
    backgroundColor: '#f5f5f5',
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
  },
  selectedCard: {
    backgroundColor: '#000',
  },
  serviceName: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 5,
  },
  serviceDetails: {
    fontSize: 16,
    color: '#666',
  },
  dateList: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  dateCard: {
    backgroundColor: '#f5f5f5',
    padding: 15,
    borderRadius: 8,
    marginRight: 10,
    minWidth: 100,
    alignItems: 'center',
  },
  dateText: {
    fontSize: 16,
  },
  timeList: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: 30,
  },
  timeCard: {
    backgroundColor: '#f5f5f5',
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
    width: '48%',
    alignItems: 'center',
  },
  timeText: {
    fontSize: 16,
  },
  confirmButton: {
    backgroundColor: '#000',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 30,
  },
  confirmButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
});