import React from 'react';
import {TouchableOpacity, StyleSheet} from 'react-native';
import {Icon} from '@ui-kitten/components';

const ShareButton = ({onPress}) => (
  <TouchableOpacity style={style.button} activeOpacity={0.9} onPress={onPress}>
    <Icon fill="#fff" name="share" style={style.icon} />
  </TouchableOpacity>
);

const style = StyleSheet.create({
  button: {
    backgroundColor: '#3255AF',
    width: 60,
    height: 60,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    color: '#fff',
    position: 'absolute',
    bottom: 20,
    right: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.36,
    shadowRadius: 6.68,

    elevation: 11,
  },
  icon: {
    width: 25,
    height: 25,
  },
});

export default ShareButton;
