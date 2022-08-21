import React from 'react';
import {ScrollView, StyleSheet, Linking} from 'react-native';
import LoginForm from '../components/LoginForm';
import LoginContainer from '../containers/Login';
import {Button} from '@ui-kitten/components';
import {BASE_URL} from '../env';

const Login = ({navigation}) => {
  return (
    <ScrollView style={style.wrapper} keyboardDismissMode="interactive">
      <LoginContainer navigation={navigation}>
        {(params) => (
          <LoginForm
            onSubmit={params.login}
            onGoToRegister={params.goToRegister}
            isLoading={params.isLoading}
          />
        )}
      </LoginContainer>
      <Button
        appearance="ghost"
        size="small"
        onPress={() => Linking.openURL(`${BASE_URL}o-aplikacii`)}>
        Podmienky používania
      </Button>
    </ScrollView>
  );
};

const style = StyleSheet.create({
  wrapper: {
    backgroundColor: '#fff',
    flex: 1,
    position: 'relative',
  },
});

export default Login;
