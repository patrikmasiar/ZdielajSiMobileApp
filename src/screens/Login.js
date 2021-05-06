import React from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import LoginForm from '../components/LoginForm';
import LoginContainer from '../containers/Login';

const Login = ({navigation}) => {
  return (
    <ScrollView style={style.wrapper} keyboardDismissMode="interactive">
      <LoginContainer navigation={navigation}>
        {(params) => (
          <LoginForm
            onSubmit={params.login}
            onGoToRegister={params.goToRegister}
          />
        )}
      </LoginContainer>
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
