import React from 'react';
import { StyleSheet, Share } from 'react-native';
import { Button, Icon } from '@ui-kitten/components';

const ShareIcon: () => React$Node = (props) => (
  <Icon {...props} name='share' />
);

const onSharePress = async (url) => {
  try {
    const result = await Share.share({
      message: url});
    if (result.action === Share.sharedAction) {
      if (result.activityType) {
        // shared with activity type of result.activityType
      } else {
        // shared
      }
    } else if (result.action === Share.dismissedAction) {
      // dismissed
    }
  } catch (error) {
    alert(error.message);
  }
};

const ShareButton = ({url}) => (
  <Button
    style={styles.button}
    status='success'
    size='giant'
    accessoryLeft={ShareIcon}
    onPress={() => onSharePress(url)}
  >
    ZDIEĽAJ
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
});

export default ShareButton;
