import React from 'react';
import {View, StyleSheet, Text, Alert} from 'react-native';
import ProfileContainer from '../containers/ProfileContainer';
import {Button} from '@ui-kitten/components';
import ApiRequests from '../api/apiRequests';

const Profile = ({navigation}) => {
  return (
    <ProfileContainer navigation={navigation}>
      {(params) => {
        const handleDeleteAccount = async () => {
          const response = await ApiRequests.deleteAccount(params?.user?.token);

          if (response.data.user.id) {
            Alert.alert('Žiadosť prijatá', 'Účet bol úspešne vymazaný.');
            params.logout();
          }
        };

        return (
          <View style={style.wrapper}>
            <View style={style.head}>
              <Text style={style.title} numberOfLines={2}>
                Vitaj {params?.user?.name ?? ''}
              </Text>
            </View>
            <View>
              <Button
                status="warning"
                appearance="outline"
                style={style.logoutBtn}
                onPress={params.logout}>
                Odhlásiť sa
              </Button>
              <Button
                status="danger"
                appearance="outline"
                size="small"
                onPress={handleDeleteAccount}>
                Vymazať účet
              </Button>
            </View>
          </View>
        );
      }}
    </ProfileContainer>
  );
};

const style = StyleSheet.create({
  wrapper: {
    backgroundColor: '#fff',
    flex: 1,
    position: 'relative',
    padding: 20,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  head: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    fontWeight: 'bold',
    color: '#3255AF',
    fontSize: 30,
    flex: 1,
  },
  logoutBtn: {
    marginBottom: 12,
  },
});

export default Profile;
