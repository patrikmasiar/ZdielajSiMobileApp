import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Layout, TopNavigation  } from '@ui-kitten/components';
import SelectionArea from './SelectionArea';
import UploadButton from './UploadButton';

const Main = () => (
  <Layout style={style.container}>
    <TopNavigation
      alignment='center'
      title='zdielaj.si'
    />
    <View style={style.body}>
      <SelectionArea />
      <View style={style.uploadButtonWrapper}>
        <UploadButton />
      </View>
    </View>
  </Layout>
);

const style = StyleSheet.create({
  container: {
    flex: 1,
  },
  body: {
    paddingVertical: 20,
    paddingHorizontal: 10,
    flex: 1,
    justifyContent: 'space-between'
  },
  uploadButtonWrapper: {
  //  alignSelf: 'flex-end'
  }
});

export default Main;