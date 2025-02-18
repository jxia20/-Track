import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableWithoutFeedback, Keyboard, Image } from 'react-native';

const SignupScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigation = useNavigation(); // Get the navigation object

  const handleSignup = async () => {
    Keyboard.dismiss(); // Dismiss the keyboard when attempting to log in
    if (email.trim() === '' || password.trim() === '') {
      // Display an error message, for example using an alert or any other UI component
      alert('Email and password cannot be blank');
    } else {
      // Perform the login action if email and password are not blank
      // Here you can make your API call or any other login logic
      // For example, you can use axios to make a POST request to your backend API
      // await axios.post('your-api-endpoint', { email, password });

      // Navigate to the home screen if the login is successful
      navigation.navigate('Login');
    }
  };

  const navigateToSignup = () => {
    Keyboard.dismiss(); // Dismiss the keyboard when navigating to the Signup screen
    navigation.navigate('Signup');
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View style={styles.container}>
        <Image
          source={require('./images/alvin.jpg')} // Provide the path to your logo image file
          style={styles.logo}
        />
        <Text>Signup</Text>
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry
          value={password}
          onChangeText={(text) => setPassword(text)}
        />
        <Button title="Sign Up" onPress={handleSignup} />
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 200, 
    height: 350, 
    marginBottom: 30, 
    marginTop: -150,
  },
  input: {
    width: '80%',
    height: 40,
    margin: 12,
    padding: 10,
    borderWidth: 1,
  },
});

export default SignupScreen;
