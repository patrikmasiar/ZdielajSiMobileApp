import AsyncStorage from '@react-native-async-storage/async-storage';
import LocalStorage from '../constants/localStorage';

const User = {
  get: async () => {
    try {
      const userToken = await AsyncStorage.getItem(LocalStorage.key.useInfo);

      return userToken;
    } catch (e) {
      console.error(e);
    }
  },
  set: async (user) => {
    try {
      await AsyncStorage.setItem(
        LocalStorage.key.useInfo,
        JSON.stringify(user),
      );
    } catch (e) {
      console.error(e);
    }
  },
  remove: async () => {
    try {
      await AsyncStorage.setItem(
        LocalStorage.key.useInfo,
        JSON.stringify(null),
      );
    } catch (e) {
      console.error(e);
    }
  },
};

export default User;
