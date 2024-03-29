import React, {lazy, Suspense} from 'react';
import {ActivityIndicator, StyleSheet, Text} from 'react-native';
import {Layout} from '@ui-kitten/components';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import UploadHeaderButton from '../components/UploadHeaderButton';
import ImagesHeaderButton from '../components/ImagesHeaderButton';
import {Icon} from '@ui-kitten/components';
import {useAppContext} from '../contextStore';
import Routes from './routes';

const Share = lazy(() => import('../screens/Share'));
const Images = lazy(() => import('../screens/ImagesList'));
const DownloadImages = lazy(() => import('../screens/DownloadImages'));
const Register = lazy(() => import('../screens/Register'));
const Login = lazy(() => import('../screens/Login'));
const Profile = lazy(() => import('../screens/Profile'));

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const ShareRouter = () => {
  return (
    <Layout style={style.container}>
      <Suspense fallback={<ActivityIndicator />}>
        <Stack.Navigator>
          <Stack.Screen
            name={Routes.UPLOAD}
            component={Images}
            options={({navigation, route}) => ({
              title: <Text style={style.title}>Zdieľaj.si</Text>,
              headerStyle: {
                height: 60,
                backgroundColor: '#f9f9f9',
              },
              headerRight: () => <UploadHeaderButton navigation={navigation} />,
              headerLeft: () => <ImagesHeaderButton navigation={navigation} />,
            })}
          />
          <Stack.Screen
            name={Routes.SHARE}
            component={Share}
            options={{
              title: <Text style={style.title}>Zdieľaj.si</Text>,
              headerStyle: {
                height: 60,
                backgroundColor: '#f9f9f9',
              },
              headerBackTitle: 'Späť',
            }}
          />
          <Stack.Screen
            name={Routes.DOWNLOAD}
            component={DownloadImages}
            options={{
              title: <Text style={style.title}>Sťahuj.si</Text>,
              headerStyle: {
                height: 60,
                backgroundColor: '#f9f9f9',
              },
              headerBackTitle: 'Späť',
            }}
          />
        </Stack.Navigator>
      </Suspense>
    </Layout>
  );
};

const UserRouter = () => {
  const {
    state: {user},
  } = useAppContext();
  const isUserLogged = !!user?.token;

  if (isUserLogged) {
    return (
      <Layout style={style.container}>
        <Suspense fallback={<ActivityIndicator />}>
          <Stack.Navigator>
            <Stack.Screen
              name={Routes.PROFILE}
              component={Profile}
              options={({navigation, route}) => ({
                title: <Text style={style.title}>Profil</Text>,
                headerStyle: {
                  height: 60,
                  backgroundColor: '#f9f9f9',
                },
              })}
            />
          </Stack.Navigator>
        </Suspense>
      </Layout>
    );
  }

  return (
    <Layout style={style.container}>
      <Suspense fallback={<ActivityIndicator />}>
        <Stack.Navigator>
          <Stack.Screen
            name={Routes.LOGIN}
            component={Login}
            options={({navigation, route}) => ({
              title: <Text style={style.title}>Prihlás.sa</Text>,
              headerStyle: {
                height: 60,
                backgroundColor: '#f9f9f9',
              },
            })}
          />
          <Stack.Screen
            name={Routes.REGISTRATION}
            component={Register}
            options={({navigation, route}) => ({
              title: <Text style={style.title}>Registruj.sa</Text>,
              headerStyle: {
                height: 60,
                backgroundColor: '#f9f9f9',
              },
              headerBackTitle: 'Späť',
            })}
          />
        </Stack.Navigator>
      </Suspense>
    </Layout>
  );
};

const Router = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;

          switch (route.name) {
            case Routes.TABS.SHARE:
              iconName = 'share';
              break;
            case Routes.TABS.PROFILE:
              iconName = 'person-outline';
              break;
          }

          return (
            <Icon
              fill={color}
              name={iconName}
              style={{width: 25, height: 25}}
            />
          );
        },
      })}
      tabBarOptions={{
        activeTintColor: '#3255AF',
        inactiveTintColor: 'gray',
        showLabel: false,
      }}>
      <Tab.Screen name={Routes.TABS.SHARE} component={ShareRouter} />
      <Tab.Screen name={Routes.TABS.PROFILE} component={UserRouter} />
    </Tab.Navigator>
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
