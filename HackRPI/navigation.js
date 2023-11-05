// Navigation.js
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import LoginScreen from './screens/loginScreen';
import SignupScreen from './screens/signupScreen';
import HomeScreen from './screens/homeScreen';

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  const screenOptions = {
    headerShown: true, // Show header for all screens by default
    tabBarActiveTintColor: 'blue',
    tabBarInactiveTintColor: 'gray',
    tabBarStyle: {
      display: 'flex',
    },
  };
  
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={screenOptions}>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Signup" component={SignupScreen} />
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{
            headerShown: false, // Hide the header for only this screen
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};


export default AppNavigator;
