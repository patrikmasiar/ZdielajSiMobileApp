import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

const Profile = () => {
  return (
    <View style={style.wrapper}>
      <Text style={style.text}>PRIHLASOVANIE ČOSKORO</Text>
    </View>
  );
};

const style = StyleSheet.create({
  wrapper: {
    backgroundColor: '#fff',
    flex: 1,
    position: 'relative',
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontWeight: 'bold',
    color: 'gray',
  },
});

export default Profile;
