import React from 'react';
import {View, StyleSheet} from 'react-native';
import LoginForm from '../components/LoginForm';
import LoginContainer from '../containers/Login';

const Login = () => {
  return (
    <View style={style.wrapper}>
      <LoginContainer>
        {(params) => (
          <LoginForm
            onSubmit={params.login}
            onGoToRegister={params.goToRegister}
          />
        )}
      </LoginContainer>
    </View>
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
