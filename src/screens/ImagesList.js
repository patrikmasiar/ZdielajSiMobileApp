import React from 'react';
import {View, StyleSheet} from 'react-native';
import AddButton from '../components/AddButton';
import PreviewsToUpload from '../components/PreviewsToUpload';
import PreviewsContainer from '../containers/PreviewsContainer';

const ImagesList = () => (
  <View style={style.wrapper}>
    <PreviewsContainer>
      {(params) => <PreviewsToUpload data={params.previews} />}
    </PreviewsContainer>
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
