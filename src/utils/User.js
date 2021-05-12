import AsyncStorage from '@react-native-async-storage/async-storage';

const User = {
  get: async () => {
    try {
      const userToken = await AsyncStorage.getItem('user_info');

      return userToken;
    } catch (e) {
      console.error(e);
    }
  },
  set: async (user) => {
    try {
      await AsyncStorage.setItem('user_info', JSON.stringify(user));
    } catch (e) {
      console.error(e);
    }
  },
  remove: async () => {
    try {
      await AsyncStorage.setItem('user_info', null);
    } catch (e) {
      console.error(e);
    }
  },
};

export default User;
