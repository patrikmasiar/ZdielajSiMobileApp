import React from 'react';
import {StyleSheet, TouchableOpacity, Dimensions} from 'react-native';

const WINDOW_WIDTH = Dimensions.get('window').width;

const SelectionArea = () => (
  <TouchableOpacity
    style={style.wrapper}
    activeOpacity={0.8}
  >
  </TouchableOpacity>
);

const style = StyleSheet.create({
  wrapper: {
    width: '100%',
    backgroundColor: '#1a2138',
    height: WINDOW_WIDTH - 20,
    borderWidth: 2,
    borderColor: '#101426',
    borderStyle: 'dashed',
    borderRadius: 10,
  },
});

export default SelectionArea;
