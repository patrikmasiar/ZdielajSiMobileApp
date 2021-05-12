import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import ProfileContainer from '../containers/ProfileContainer';

const Profile = () => {
  return (
    <ProfileContainer>
      {(params) => (
        <View style={style.wrapper}>
          <Text style={style.text}>Vitaj {params.user.name}</Text>
        </View>
      )}
    </ProfileContainer>
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
