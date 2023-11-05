import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const SubscriptionsPage = ({ route }) => {
  // Check if route object is undefined or missing params property
  if (!route || !route.params || !route.params.answers) {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Subscription Details</Text>
        <Text style={styles.label}>Subscription details not available.</Text>
      </View> // Display a message if route or answers object is missing
    );
  }

  const { answers } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Subscription Details</Text>
      <Text style={styles.label}>Age: {answers.age}</Text>
      <Text style={styles.label}>Employment Status: {answers.employmentStatus}</Text>
      <Text style={styles.label}>Pension Status: {answers.pensionStatus}</Text>
      <Text style={styles.label}>Loans: {answers.loans}</Text>
      <Text style={styles.label}>Subscriptions: {answers.subscriptions}</Text>
      <Text style={styles.label}>Income: {answers.income}</Text>
      <Text style={styles.label}>Budget: {answers.budget}</Text>
      {/* Display more subscription details as needed */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  label: {
    fontSize: 18,
    marginBottom: 10,
  },
});

export default SubscriptionsPage;
