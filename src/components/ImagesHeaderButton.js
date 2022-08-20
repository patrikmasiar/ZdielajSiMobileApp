import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {Icon} from '@ui-kitten/components';
import Routes from '../router/routes';

const ImagesHeaderButton = ({navigation}) => {
  return (
    <TouchableOpacity
      style={style.button}
      onPress={() => navigation.navigate(Routes.DOWNLOAD)}>
      <Icon fill="#3255AF" name="image" style={style.icon} />
    </TouchableOpacity>
  );
};

const style = StyleSheet.create({
  button: {
    paddingHorizontal: 10,
  },
  icon: {
    width: 30,
    height: 30,
  },
  indicator: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 30,
    height: 30,
  },
});

export default ImagesHeaderButton;
