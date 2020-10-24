import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, Icon, Spinner } from '@ui-kitten/components';
import PropTypes from 'prop-types'

const UploadIcon: () => React$Node = (props) => (
  <Icon {...props} name='upload' />
);

const LoadingIndicator = (props) => (
  <View style={[props.style, styles.indicator]}>
    <Spinner size='small' status='control' />
  </View>
);

const UploadButton = ({onPress, isLoading, isDisabled}) => (
  <Button
    style={styles.button}
    status='primary'
    size='giant'
    accessoryLeft={isLoading ? LoadingIndicator : UploadIcon}
    onPress={onPress}
    disabled={isLoading || isDisabled}
  >
    NAHRAJ
  </Button>
);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  button: {
    margin: 2,
  },
  indicator: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  indicator: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

UploadButton.onPress = {
  onPress: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
  isDisabled: PropTypes.bool.isRequired,
};

export default UploadButton;
