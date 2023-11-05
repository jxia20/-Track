import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import BudgetingPage from './BudgetingPage'; // Import your BudgetingPage component
import SubscriptionPage from './SubscriptionPage'; // Import your SubscriptionPage component
import { View, Text, StyleSheet, Image } from 'react-native';
import QuestionnairePage from './QuestionnairePage'; // Import your SubscriptionPage component

const Tab = createBottomTabNavigator();

const HomeScreen = () => {
  return (
    <NavigationContainer independent={true}>
      <Tab.Navigator
        screenOptions={{
          headerShown: false, // Hide the header for all screens in this navigator
          tabBarIcon: ({ focused, color, size }) => {
            let iconSource;
            if (focused) {
              iconSource = require('./images/home.png');
            } else {
              iconSource = require('./images/home_inactive.png');
            }
            return <Image source={iconSource} style={{ width: 24, height: 24, tintColor: color }} />;
          },
        }}
        tabBarOptions={{
          activeTintColor: 'blue',
          inactiveTintColor: 'gray',
        }}
      >
        <Tab.Screen name="Budgeting" component={BudgetingPage} />
        <Tab.Screen name="Home" component={HomeContent} options={{ tabBarIcon: ({ focused, color, size }) => <Image source={require('./images/home.png')} style={{ width: 24, height: 24, tintColor: color }} /> }} />
        <Tab.Screen name="Subscription" component={SubscriptionPage} />
        <Tab.Screen name="questionnaire" component={QuestionnairePage} />
        
      </Tab.Navigator>
    </NavigationContainer>
  );
};

const HomeContent = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to My Banking App</Text>
      <Image source={require('./images/squirrel.jpg')} style={styles.logo} />
      <Text style={styles.subtitle}>Your Trusted Banking Partner</Text>
      {/* Your HomeScreen content here */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    color: 'gray',
    marginBottom: 20,
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: 30,
  },
});

export default HomeScreen;
