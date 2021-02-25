import React from 'react';
import {StyleSheet} from 'react-native';
import {Layout} from '@ui-kitten/components';
import {createStackNavigator} from '@react-navigation/stack';

// SCREENS
import ShareScreen from '../screens/ShareScreen';
import UploadScreen from '../screens/UploadScreen';
import Navigation from '../components/Navigation';

const Stack = createStackNavigator();

const screenOptions = {
  headerShown: false,
};

const Router = () => {
  return (
    <Layout style={style.container}>
      <Navigation />
      <Stack.Navigator>
        <Stack.Screen
          name="Upload"
          component={UploadScreen}
          options={screenOptions}
        />
        <Stack.Screen
          name="Share"
          component={ShareScreen}
          options={screenOptions}
        />
      </Stack.Navigator>
    </Layout>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Router;
