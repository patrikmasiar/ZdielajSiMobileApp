import React from 'react';
import { StyleSheet, View } from 'react-native';
import PickerContainer from '../containers/PickerContainer';
import PropTypes from 'prop-types'
import UploadButton from './UploadButton';

const Main: () => React$Node = ({
  onUploadPress,
  isLoading,
  isUploadDisabled,
}) => (
  <View style={style.body}>
    <PickerContainer />
    <UploadButton
      onPress={onUploadPress}
      isLoading={isLoading}
      isDisabled={isUploadDisabled}
    />
  </View>
);

const style = StyleSheet.create({
  body: {
    paddingVertical: 20,
    paddingHorizontal: 10,
    flex: 1,
    justifyContent: 'space-between'
  },
});

Main.propTypes = {
  onUploadPress: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
  isUploadDisabled: PropTypes.bool.isRequired,
  shareUrl: PropTypes.string,
};

Main.defaultProps = {
  shareUrl: null,
}

export default Main;