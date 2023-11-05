import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const SubscriptionPage = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Subscription Page</Text>
      {/* Add your subscription-related content here */}
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
