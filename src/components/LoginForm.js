import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import {Input, Button} from '@ui-kitten/components';

const LoginForm = ({onSubmit, onGoToRegister}) => {
  const [emailValue, setEmailValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');

  return (
    <View style={style.wrapper}>
      <Input
        style={style.input}
        size="large"
        placeholder="e-mail"
        label="E-mail"
        value={emailValue}
        onChangeText={setEmailValue}
        autoCapitalize="none"
        autoCorrect={false}
        keyboardType="email-address"
        returnKeyType="next"
      />
      <Input
        style={style.input}
        label="Heslo"
        size="large"
        placeholder="heslo"
        secureTextEntry={true}
        value={passwordValue}
        onChangeText={setPasswordValue}
        autoCapitalize="none"
        autoCorrect={false}
        returnKeyType="send"
      />
      <Button
        style={style.loginButton}
        disabled={emailValue.length < 5 || passwordValue.length < 7}
        onPress={() => onSubmit(emailValue, passwordValue)}>
        Prihlásiť sa
      </Button>
      <Button
        appearance="ghost"
        style={style.registerButton}
        onPress={onGoToRegister}>
        Vytvoriť účet
      </Button>
    </View>
  );
};

const style = StyleSheet.create({
  wrapper: {
    padding: 20,
  },
  loginButton: {
    marginTop: 15,
  },
  registerButton: {
    marginTop: 5,
  },
  input: {
    marginVertical: 10,
  },
});

export default LoginForm;
