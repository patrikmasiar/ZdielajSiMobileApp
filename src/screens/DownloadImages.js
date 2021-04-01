import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

const DownloadImages = () => (
  <View style={style.wrapper}>
    <Text>Download images</Text>
  </View>
);

const style = StyleSheet.create({
  wrapper: {
    backgroundColor: '#fff',
    flex: 1,
    position: 'relative',
  },
});

export default DownloadImages;
