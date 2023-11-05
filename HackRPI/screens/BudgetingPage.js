import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const BudgetingPage = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Budgeting Page</Text>
      {/* Add your budgeting-related content here */}
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

export default BudgetingPage;
