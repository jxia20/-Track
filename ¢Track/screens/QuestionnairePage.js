import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet, Alert, TouchableWithoutFeedback, Keyboard, ScrollView, SectionList, TouchableOpacity } from 'react-native';

const QuestionnairePage = ({ navigation }) => {
  const [age, setAge] = useState('');
  const [employmentStatus, setEmploymentStatus] = useState('');
  const [pensionStatus, setPensionStatus] = useState('');
  const [loans, setLoans] = useState('');
  const [subscriptions, setSubscriptions] = useState([]);
  const [newSubscription, setNewSubscription] = useState('');
  const [income, setIncome] = useState('');
  const [budget, setBudget] = useState('');
  const [answers, setAnswers] = useState(null);

  const addSubscription = () => {
    if (newSubscription.trim() !== '') {
      setSubscriptions([...subscriptions, newSubscription]);
      setNewSubscription('');
    }
  };

  const removeSubscription = (index) => {
    const updatedSubscriptions = subscriptions.filter((_, i) => i !== index);
    setSubscriptions(updatedSubscriptions);
  };

  const handleSubmit = () => {
    if (age.trim() === '' && employmentStatus.trim() === '') {
      // Show an error message if both fields are empty
      Alert.alert('Error', 'Please fill out all the fields.');
    } else if (age.trim() === '') {
      // Show an error message if age is empty
      Alert.alert('Error', 'Please fill out the age field.');
    } else if (employmentStatus.trim() === '') {
      // Show an error message if employmentStatus is empty
      Alert.alert('Error', 'Please fill out the employment status field.');
    } else {
      // Save the answers to local state
      const userAnswers = {
        age: age,
        employmentStatus: employmentStatus,
        pensionStatus: pensionStatus,
        loans: loans,
        subscriptions: subscriptions,
        income: income,
        budget: budget,
      };
      setAnswers(userAnswers);

      Alert.alert('Success', 'Answers submitted successfully!');
    }
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.formContainer}>
          <Text style={styles.title}>Questionnaire</Text>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Age:</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter your age"
              keyboardType="numeric"
              value={age}
              onChangeText={(text) => setAge(text)}
            />
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Employment Status:</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter your employment status"
              value={employmentStatus}
              onChangeText={(text) => setEmploymentStatus(text)}
            />
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Pension Status (N/A if not retired):</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter your pension status"
              value={pensionStatus}
              onChangeText={(text) => setPensionStatus(text)}
            />
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Loans:</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter your loans status"
              value={loans}
              onChangeText={(text) => setLoans(text)}
            />
          </View>
            <View style={styles.inputContainer}>
              <Text style={styles.label}>Subscriptions:</Text>
              <SectionList
                sections={[
                  { data: subscriptions },
                ]}
                renderItem={({ item, index }) => (
                  <View style={styles.subscriptionItem}>
                    <Text>{item}</Text>
                    <TouchableOpacity onPress={() => removeSubscription(index)}>
                      <Text style={styles.removeButton}>Remove</Text>
                    </TouchableOpacity>
                  </View>
                )}
                keyExtractor={(item, index) => index.toString()}
              />
                <TextInput 
                style={styles.input}
                  placeholder="Enter subscription"
                  value={newSubscription}
                  onChangeText={(text) => setNewSubscription(text)}
                />
              <TouchableOpacity onPress={addSubscription}>
                  <Text style={styles.addButton}>Add</Text>
                </TouchableOpacity>
            </View>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Income:</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter your income"
              keyboardType="numeric"
              value={income}
              onChangeText={(text) => setIncome(text)}
            />
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Budget:</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter your budget"
              keyboardType="numeric"
              value={budget}
              onChangeText={(text) => setBudget(text)}
            />
          </View>
          <View style={styles.buttonContainer}>
            <Button title="Submit" onPress={handleSubmit} />
          </View>
          {answers && (
            <Button
              title="View Subscriptions"
              onPress={() => {
                // Navigate to SubscriptionsPage and pass the answers as a parameter
                navigation.navigate('Subscription', { answers });
              }}
            />
          )}
        </View>
      </ScrollView>
    </TouchableWithoutFeedback>

  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start', // Align content to the left
    padding: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    marginTop:30,
    alignSelf: 'flex-start', // Align text to the left
  },
  label: {
    fontSize: 18,
    marginBottom: 10,
    alignSelf: 'flex-start', // Align text to the left
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    width: '80%',
    paddingHorizontal: 10,
    alignSelf: 'flex-start', // Align input to the left
  },
  inputContainer: {
    marginBottom: 20,
    width: 300,
  },
  buttonContainer: {
    marginTop: -30,
    marginLeft: -10,
    alignItems: 'center', // Center the content horizontally
    width: '100%', // Take the full width of the parent container
  },
  addButton: {
    color: 'blue',
    marginLeft: 3,
  },
  subscriptionItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  removeButton: {
    color: 'red',
  },
});

export default QuestionnairePage;
