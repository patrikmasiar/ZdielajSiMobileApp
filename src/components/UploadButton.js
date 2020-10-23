import React from 'react';
import { StyleSheet } from 'react-native';
import { Button, Icon } from '@ui-kitten/components';
import PropTypes from 'prop-types'

const UploadIcon = (props) => (
  <Icon {...props} name='upload' />
);

const UploadButton = ({onPress}) => (
  <Button
    style={styles.button}
    status='primary'
    size='giant'
    accessoryLeft={UploadIcon}
    onPress={onPress}
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
});

UploadButton.onPress = {
  onPress: PropTypes.func.isRequired,
};

export default UploadButton;
