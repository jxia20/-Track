import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { saveDataToStorage, getDataFromStorage, removeDataFromStorage } from './utils';

const test = () => {
  return (
    console.log('a'),
    console.log(getDataFromStorage('userInput'))
  );
}

const SubscriptionPage = () => {
  test();
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Subscription Page</Text>
      {} 
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

export default SubscriptionPage;
