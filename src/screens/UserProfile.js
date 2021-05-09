import React from 'react';
import {ScrollView, StyleSheet, Text} from 'react-native';

const UserProfile = ({navigation}) => {
  return (
    <ScrollView style={style.wrapper} keyboardDismissMode="interactive">
      <Text>Profile</Text>
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

export default UserProfile;
