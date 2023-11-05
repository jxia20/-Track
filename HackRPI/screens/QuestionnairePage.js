import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, TextInput } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const saveInputToLocalStorage = async (key, value) => {
  try {
    await AsyncStorage.setItem(key, value);
    // You can also handle success or show a confirmation message here.
    //console.log(value);
  } catch (error) {
    // Handle errors, such as storage limit exceeded.
    console.error(error);
  }
};

const QuestionnairePage = () => {
  const [age, setAge] = useState(''); // Use setAge to update the age state
  const options = [
    { label: 'Unemployed', value: 1 },
  ];

  // Load the saved input from local storage when the component is mounted
  useEffect(() => {
    const loadInputFromLocalStorage = async () => {
      try {
        const savedAge = await AsyncStorage.getItem('userInput');
        if (savedAge !== null) {
          setAge(savedAge);
        }
      } catch (error) {
        // Handle errors, if any.
        console.error(error);
      }
    };

    loadInputFromLocalStorage();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Questionnaire</Text>
      <ScrollView>
        <Text style={styles.scrollItem}>Age:</Text>
        <TextInput
          style={styles.textIn}
          placeholder="Age"
          value={age}
          onChangeText={(newAge) => {
            setAge(newAge);
            saveInputToLocalStorage('userInput', newAge);
          }}
        />

        <Text style={styles.scrollItem}>Employment Status:</Text>
        <Text style={styles.scrollItem}>Do you have a Pension?</Text>
        <Text style={styles.scrollItem}>Loans:</Text>
        <Text style={styles.scrollItem}>Subscriptions</Text>
        <Text style={styles.scrollItem}>Income:</Text>
        <Text style={styles.scrollItem}>Budget</Text>
      </ScrollView>
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
    marginTop: 70,
  },
  scrollItem: {
    marginTop: 20,
    fontSize: 18,
  },
  textIn: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});

export default QuestionnairePage;
