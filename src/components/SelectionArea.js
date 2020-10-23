import React from 'react';
import {StyleSheet, TouchableOpacity, Dimensions} from 'react-native';
import PropTypes from 'prop-types'

const WINDOW_WIDTH = Dimensions.get('window').width;

const SelectionArea = ({onSelectPress}) => (
  <TouchableOpacity
    style={style.wrapper}
    activeOpacity={0.8}
    onPress={onSelectPress}
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

SelectionArea.propTypes = {
  onSelectPress: PropTypes.func.isRequired,
};

export default SelectionArea;
