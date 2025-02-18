import AsyncStorage from '@react-native-async-storage/async-storage';

// Function to save data to AsyncStorage
const saveDataToStorage = async (key, value) => {
  try {
    await AsyncStorage.setItem(key, value);
  } catch (error) {
    console.error('Error saving data to AsyncStorage:', error);
  }
};

// Function to retrieve data from AsyncStorage
const getDataFromStorage = async (key) => {
  try {
    const data = await AsyncStorage.getItem(key);
    return data;
  } catch (error) {
    console.error('Error retrieving data from AsyncStorage:', error);
    return null;
  }
};

// Function to remove data from AsyncStorage
const removeDataFromStorage = async (key) => {
  try {
    await AsyncStorage.removeItem(key);
  } catch (error) {
    console.error('Error removing data from AsyncStorage:', error);
  }
};

export { saveDataToStorage, getDataFromStorage, removeDataFromStorage };
