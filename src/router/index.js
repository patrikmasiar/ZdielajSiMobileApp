import React, {lazy, Suspense} from 'react';
import {ActivityIndicator, StyleSheet, Text} from 'react-native';
import {Layout} from '@ui-kitten/components';
import {createStackNavigator} from '@react-navigation/stack';

const Share = lazy(() => import('../screens/Share'));
const Images = lazy(() => import('../screens/ImagesList'));

const Stack = createStackNavigator();

const Router = () => {
  return (
    <Layout style={style.container}>
      {/* <Navigation /> */}
      <Suspense fallback={<ActivityIndicator />}>
        <Stack.Navigator>
          <Stack.Screen
            name="upload"
            component={Images}
            title="Hello"
            options={{
              title: <Text style={style.title}>Zdieľaj.si</Text>,
              headerStyle: {
                height: 60,
              },
            }}
          />
          <Stack.Screen
            name="share"
            component={Share}
            options={{
              title: <Text style={style.title}>Zdieľaj.si</Text>,
              headerStyle: {
                height: 60,
              },
            }}
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
  title: {
    fontWeight: '900',
    fontSize: 18,
    color: '#3255AF',
  },
});

export default Router;
