import React from 'react';
import { View, Text, StyleSheet, SectionList, ScrollView } from 'react-native';

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
  const data = [{ title: 'Subscriptions:', data: answers.subscriptions }];


  return (
    <ScrollView style={styles.scrollView}>
    <View style={styles.container}>
        <Text style={[styles.title, { textAlign: 'left' }]}>Subscription Details</Text>
        <Text style={[styles.label, { textAlign: 'left' }]}>Age: {answers.age}</Text>
        <Text style={[styles.label, { textAlign: 'left' }]}>Employment Status: {answers.employmentStatus}</Text>
        <Text style={[styles.label, { textAlign: 'left' }]}>Pension Status: {answers.pensionStatus}</Text>
        <Text style={[styles.label, { textAlign: 'left' }]}>Loans: {answers.loans}</Text>
        <SectionList
          sections={data}
          renderItem={({ item }) => <Text style={[styles.label, { textAlign: 'left' }]}>- {item}</Text>}
          renderSectionHeader={({ section: { title } }) => <Text style={[styles.label, { textAlign: 'left' }]}>{title}</Text>}
          keyExtractor={(item, index) => index.toString()}
        />
        <Text style={[styles.label, { textAlign: 'left' }]}>Income: {answers.income}</Text>
        <Text style={[styles.label, { textAlign: 'left' }]}>Budget: {answers.budget}</Text>
      {/* Display more subscription details as needed */}
    </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
    padding: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    marginTop: 50,
    marginLeft: 70,
  },
  label: {
    fontSize: 18,
    marginBottom: 10,
  },
  scrollView: {
    flex: 1,
  },
});

export default SubscriptionsPage;
