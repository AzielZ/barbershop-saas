import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';

// Importando as telas
import Home from './screens/Home';
import Login from './screens/Login';
import Register from './screens/Register';
import Dashboard from './screens/Dashboard';
import NewAppointment from './screens/NewAppointment';
import Profile from './screens/Profile';
import AppointmentDetails from './screens/AppointmentDetails';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      <Stack.Navigator 
        initialRouteName="Home"
        screenOptions={{
          headerShown: true,
          headerStyle: {
            backgroundColor: '#fff',
          },
          headerTintColor: '#000',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      >
        <Stack.Screen 
          name="Home" 
          component={Home} 
          options={{ headerShown: false }}
        />
        <Stack.Screen 
          name="Login" 
          component={Login} 
          options={{ title: 'Login' }}
        />
        <Stack.Screen 
          name="Register" 
          component={Register} 
          options={{ title: 'Cadastro' }}
        />
        <Stack.Screen 
          name="Dashboard" 
          component={Dashboard} 
          options={{ 
            title: 'Dashboard',
            headerLeft: () => null, // Impede voltar após login
          }}
        />
        <Stack.Screen 
          name="NewAppointment" 
          component={NewAppointment} 
          options={{ title: 'Novo Agendamento' }}
        />
        <Stack.Screen 
          name="Profile" 
          component={Profile} 
          options={{ title: 'Meu Perfil' }}
        />
        <Stack.Screen 
          name="AppointmentDetails" 
          component={AppointmentDetails} 
          options={{ title: 'Detalhes do Agendamento' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}