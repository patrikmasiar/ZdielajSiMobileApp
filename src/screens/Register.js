import React from 'react';
import {View, StyleSheet} from 'react-native';
import RegisterForm from '../components/RegisterForm';
import RegisterContainer from '../containers/Register';

const Register = () => {
  return (
    <View style={style.wrapper}>
      <RegisterContainer>
        {(params) => <RegisterForm onSubmit={params.register} />}
      </RegisterContainer>
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

export default Register;
