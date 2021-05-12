import AsyncStorage from '@react-native-async-storage/async-storage';

const UserToken = {
  get: async () => {
    try {
      const userToken = await AsyncStorage.getItem('user_token');

      return userToken;
    } catch (e) {
      console.error(e);
    }
  },
  set: async (token) => {
    try {
      await AsyncStorage.setItem('user_token', token);
    } catch (e) {
      console.error(e);
    }
  },
  remove: async () => {
    try {
      await AsyncStorage.setItem('user_token', null);
    } catch (e) {
      console.error(e);
    }
  },
};

export default UserToken;
