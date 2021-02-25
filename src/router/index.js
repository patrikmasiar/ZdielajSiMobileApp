import React, {lazy, Suspense} from 'react';
import {ActivityIndicator, StyleSheet} from 'react-native';
import {Layout} from '@ui-kitten/components';
import {createStackNavigator} from '@react-navigation/stack';
import Navigation from '../components/Navigation';

const Share = lazy(() => import('../screens/Share'));
const Images = lazy(() => import('../screens/ImagesList'));

const Stack = createStackNavigator();

const screenOptions = {
  headerShown: false,
};

const Router = () => {
  return (
    <Layout style={style.container}>
      <Navigation />
      <Suspense fallback={<ActivityIndicator />}>
        <Stack.Navigator>
          <Stack.Screen
            name="Upload"
            component={Images}
            options={screenOptions}
          />
          <Stack.Screen
            name="Share"
            component={Share}
            options={screenOptions}
          />
        </Stack.Navigator>
      </Suspense>
    </Layout>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Router;
