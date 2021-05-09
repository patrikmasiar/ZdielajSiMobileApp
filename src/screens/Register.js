import React from 'react';
import {View, StyleSheet} from 'react-native';
import RegisterForm from '../components/RegisterForm';
import RegisterContainer from '../containers/Register';

const Register = ({navigation}) => {
  return (
    <View style={style.wrapper}>
      <RegisterContainer navigation={navigation}>
        {(params) => (
          <RegisterForm
            onSubmit={params.register}
            isLoading={params.isLoading}
          />
        )}
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
