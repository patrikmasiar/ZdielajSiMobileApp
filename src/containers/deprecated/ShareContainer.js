import React from 'react';
import {View, StyleSheet} from 'react-native';
import ShareButton from '../components/ShareButton';
import ShareScreen from '../components/ShareScreen';
import {useAppContext} from '../store';

const ShareContainer = () => {
  const {state: {shareUrl}} = useAppContext();

  return (
    <View style={style.body}>
      <ShareScreen
        shareUrl={shareUrl}
      />
      <ShareButton
        url={shareUrl}
      />
    </View>
  )
};

const style = StyleSheet.create({
  body: {
    paddingVertical: 20,
    paddingHorizontal: 10,
    flex: 1,
    justifyContent: 'space-between'
  },
});

export default ShareContainer;