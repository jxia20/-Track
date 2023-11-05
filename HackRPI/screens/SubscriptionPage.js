import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';

const SubscriptionPage = () => {
  const [subscriptionAmount, setSubscriptionAmount] = useState('');

  const handleSubscriptionAmountChange = (text) => {
    // Update the subscription amount when the user types in the TextInput
    setSubscriptionAmount(text);
  };

  const saveSubscriptionAmount = () => {
    // Handle saving the subscription amount to your data store or API
    // For now, let's just log it to the console
    console.log('Monthly Subscription Amount:', subscriptionAmount);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Subscription Page</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter monthly subscription amount"
        keyboardType="numeric"
        value={subscriptionAmount}
        onChangeText={handleSubscriptionAmountChange}
      />
      <Button title="Save" onPress={saveSubscriptionAmount} />
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
  input: {
    height: 40,
    width: '80%',
    borderWidth: 1,
    padding: 10,
    marginBottom: 20,
  },
});

export default SubscriptionPage;
