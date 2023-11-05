import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity, Modal, Button, TextInput } from 'react-native';
import ImageSlideshow from './images/image_slideshow';

const BudgetingPage = () => {
  const [userProfile, setUserProfile] = useState({
    name: 'John Doe',
    email: 'johndoe@example.com',
    budgetAmount: 1000,
    budgetPlan: 'Student Plan',
    profilePicture: require('./images/hello.jpg'),
  });

  const [modalVisible, setModalVisible] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState(null);

  const [newBudget, setNewBudget] = useState('');

  const updateBudget = () => {
    if (!isNaN(newBudget) && newBudget !== '') {
      setUserProfile(prevProfile => ({
        ...prevProfile,
        budgetAmount: parseFloat(newBudget),
      }));
      setModalVisible(false);
    }
  };

  const plans = [
    {
      id: 1,
      title: 'Basic Plan',
      description: 'This is the basic plan with essential features.',
    },
    {
      id: 2,
      title: 'Standard Plan',
      description: 'Upgrade to our standard plan for more advanced features.',
    },
    {
      id: 3,
      title: 'Premium Plan',
      description: 'Our premium plan offers exclusive features and benefits.',
    },
  ];

  const handlePlanSelect = (plan) => {
    setSelectedPlan(plan);
    setModalVisible(true);
  };

  const handleSelectButtonPress = (plan) => {
    setSelectedPlan(plan);
    setUserProfile(prevProfile => ({
      ...prevProfile,
      budgetPlan: plan.title
    }));
    setModalVisible(false);
  };


  return (
    <View style={styles.container}>
    <View style={styles.header}>
      <Text style={styles.headerText}>Profile</Text>
      </View>
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <View style={styles.profileInfo}>
          <Image source={userProfile.profilePicture} style={styles.profilePicture} />
          <View style={styles.textContainer}>
            <TouchableOpacity onPress={() => setModalVisible(true)}>
              <Text style={styles.profileText}>Name: {userProfile.name}</Text>
              <Text style={styles.profileText}>Email: {userProfile.email}</Text>
              <TouchableOpacity
                style={styles.budgetTextContainer}
                onPress={() => setModalVisible(true)}
              >
                <Text style={styles.budgetText}>
                  Budget Amount: ${userProfile.budgetAmount}
                </Text>
              </TouchableOpacity>
              <Text style={styles.profileText}>Budget Plan: {userProfile.budgetPlan}</Text>
            </TouchableOpacity>
              <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => setModalVisible(false)}
              >
                <View style={styles.modalContainer}>
                  <View style={styles.modalContent}>
                    <Text style={styles.modalTitle}>Enter New Budget Amount:</Text>
                    <TextInput
                      style={styles.input}
                      keyboardType="numeric"
                      onChangeText={text => setNewBudget(text)}
                    />
                    <Button title="Update" onPress={updateBudget} />
                  </View>
                </View>
              </Modal>
          </View>
        </View>

        <View style={styles.buttonContainer}>
        {plans.map((plan, index) => (
          <React.Fragment key={plan.id}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => handlePlanSelect(plan)}
            > 
              <Text style={styles.buttonText}>{plan.title}</Text>
            </TouchableOpacity>
            {index !== plans.length - 1 && <View style={styles.separator} />}
          </React.Fragment>
        ))}
      </View>

        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            setModalVisible(false);
          }}
        >
          <View style={styles.modalContainer}>
            {selectedPlan && (
              <View style={styles.modalContent}>
                <Text style={styles.modalTitle}>{selectedPlan.title}</Text>
                <Text>{selectedPlan.description}</Text>
                <View style={styles.buttonContainerModal}>
                  <View style={styles.modalButton}>
                    <Button title="Select" onPress={() => handleSelectButtonPress(selectedPlan)} />
                  </View>
                  <View style={styles.modalButton}>
                    <Button title="Close" onPress={() => setModalVisible(false)} />
                  </View>
                </View>
              </View>
            )}
          </View>
        </Modal>


        <ImageSlideshow />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    backgroundColor: '#ADD8E6',
    padding: 25,
    alignItems: 'center',
    paddingTop: 20,
    paddingRight: 225,
  },
  budgetTextContainer: {
    flexDirection: 'row',
  },
  budgetText: {
    color: 'blue',
    textDecorationLine: 'underline',
  },
  headerText: {
    fontSize: 24,
    color: 'white',
    marginRight: 40,
    marginTop: 30,
  },
  profilePicture: {
    width: 70,
    height: 70,
    borderRadius: 50, // To make it circular
    marginRight: 80,
    borderWidth: 1,
    borderColor: 'black',
  },
  contentContainer: {
    flexGrow: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingTop: 20,
  },
  profileInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    paddingTop: 20,
  },
  textContainer: {
    flexDirection: 'column',
  },
  profileText: {
    marginBottom: 5,
  },
  buttonContainer: {
    width: '100%',
    marginTop: 10,
    marginBottom: 20,
    borderWidth: 2, // Add border width
    borderColor: 'black', // Set border color
  },
  button: {
    backgroundColor: '#ADD8E6',
    paddingVertical: 40, // Increased button height
    borderRadius: 0,
    alignItems: 'center', // Center text horizontally within the button
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
  },
  separator: {
    height: 2,
    width: '100%',
    backgroundColor: 'black',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 24,
    marginBottom: 10,
  },
  buttonContainerModal: {
    flexDirection: 'row',
    marginTop: 20,
  },
  modalButton: {
    marginHorizontal: 50,
  },
  input: {
    height: 40,
    width: 100,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    marginTop: 10,
  },
});

export default BudgetingPage;
