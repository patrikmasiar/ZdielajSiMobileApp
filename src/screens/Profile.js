import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import ProfileContainer from '../containers/ProfileContainer';
import {Button} from '@ui-kitten/components';

const Profile = ({navigation}) => {
  return (
    <ProfileContainer navigation={navigation}>
      {(params) => (
        <View style={style.wrapper}>
          <View style={style.head}>
            <Text style={style.title} numberOfLines={2}>
              Vitaj {params?.user?.name ?? ''}
            </Text>
            <Button
              status="danger"
              appearance="outline"
              onPress={params.logout}>
              Odhlásiť sa
            </Button>
          </View>
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
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
  },
  head: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    justifyContent: 'space-between',
  },
  title: {
    fontWeight: 'bold',
    color: '#3255AF',
    fontSize: 30,
    flex: 1,
  },
});

export default Profile;
