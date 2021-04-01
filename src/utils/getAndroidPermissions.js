import {PermissionsAndroid, Alert} from 'react-native';

const getPermissionAndroid = async () => {
  try {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
      {
        title: 'Povoliť sťahovanie súborov',
        message:
          'Povolenie je povinné pre možnosť uloženia súborov do zariadenia',
        buttonNegative: 'Zrušiť',
        buttonPositive: 'Ok',
      },
    );
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      return true;
    }
    Alert.alert(
      'Ukladanie súborov',
      'Ukladanie súborov povolené',
      [{text: 'OK', onPress: () => null}],
      {cancelable: false},
    );
  } catch (err) {
    Alert.alert(
      'Ukladanie súborov',
      'Povolenie zlyhalo',
      [{text: 'OK', onPress: () => null}],
      {cancelable: false},
    );
  }
};

export default getPermissionAndroid;
