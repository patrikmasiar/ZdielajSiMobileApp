import React, {useState} from 'react';
import {ScrollView, StyleSheet, Text} from 'react-native';
import {Input, Button} from '@ui-kitten/components';

const RegisterForm = ({onSubmit}) => {
  const [nameValue, setNameValue] = useState('');
  const [emailValue, setEmailValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');

  return (
    <ScrollView style={style.wrapper} keyboardDismissMode="interactive">
      <Input
        style={style.input}
        size="large"
        placeholder="Meno"
        label="Meno"
        value={nameValue}
        onChangeText={setNameValue}
        autoCapitalize={true}
        returnKeyType="next"
        caption="Postačuje zadať iba meno bez priezviska."
      />
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
        caption="Tvoja e-mailová adresa nebude s nikým zdieľaná ani využívaná na marketingové účely."
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
        disabled={
          nameValue.length < 2 ||
          emailValue.length < 5 ||
          passwordValue.length < 7
        }
        onPress={() => onSubmit(nameValue, emailValue, passwordValue)}>
        Registrovať sa
      </Button>
    </ScrollView>
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

export default RegisterForm;
