import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import BudgetingPage from './BudgetingPage'; // Import your BudgetingPage component
import SubscriptionPage from './SubscriptionPage'; // Import your SubscriptionPage component
import { View, Text, StyleSheet } from 'react-native';

const Tab = createBottomTabNavigator();

const HomeScreen = () => {
  return (
    <NavigationContainer independent={true}>
      <Tab.Navigator>
        <Tab.Screen name="Budgeting" component={BudgetingPage} />
        <Tab.Screen name="Home" component={HomeContent} />
        <Tab.Screen name="Subscription" component={SubscriptionPage} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

const HomeContent = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to My App</Text>
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
    marginBottom: 20,
  },
});

export default HomeScreen;
