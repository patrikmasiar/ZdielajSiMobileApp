import React from 'react';
import { StyleSheet } from 'react-native';
import { Button, Icon } from '@ui-kitten/components';

const UploadIcon = (props) => (
  <Icon {...props} name='upload' />
);

const UploadButton = () => (
  <Button
    style={styles.button}
    status='primary'
    size='giant'
    accessoryLeft={UploadIcon}
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

export default UploadButton;
