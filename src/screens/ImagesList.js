import React from 'react';
import {View, StyleSheet} from 'react-native';
import AddButton from '../components/AddButton';
import PreviewsToUpload from '../components/PreviewsToUpload';

const ImagesList = () => (
  <View style={style.wrapper}>
    <PreviewsToUpload data={[]} />
    <AddButton />
  </View>
);

const style = StyleSheet.create({
  wrapper: {
    backgroundColor: '#fff',
    flex: 1,
    position: 'relative',
  },
});

export default ImagesList;
