// screens/LoginScreen.js
import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { TouchableWithoutFeedback, Keyboard } from 'react-native';


const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();

  const handleLogin = async () => {
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
      navigation.navigate('HomeScreen');
    }
  };

  const navigateToSignup = () => {
    Keyboard.dismiss(); // Dismiss the keyboard when navigating to the Signup screen
    navigation.navigate('Signup');
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <Image
          source={require('./images/squirrel.jpg')} // Provide the path to your logo image file
          style={styles.logo}
        />
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
        <View style={styles.buttonContainer}>
          <Button title="Login" onPress={handleLogin} />
          <Button title="Sign Up" onPress={navigateToSignup} />
        </View>
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
    width: 300, // Set the width of your logo as per your design
    height: 300, // Set the height of your logo as per your design
    marginBottom: 30, // Adjust the margin bottom based on your design preference
    marginTop: -150,
  },
  input: {
    width: '80%',
    height: 40,
    margin: 12,
    padding: 10,
    borderWidth: 1,
  },
  buttonContainer: {
    flexDirection: 'row', // Horizontal layout
    justifyContent: 'space-between', // Buttons will be spaced evenly
    width: '80%',
  },
});

export default LoginScreen;
