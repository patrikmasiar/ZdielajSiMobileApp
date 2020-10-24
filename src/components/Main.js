import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Layout, TopNavigation  } from '@ui-kitten/components';
import UploadButton from './UploadButton';
import PickerContainer from '../containers/PickerContainer';
import PropTypes from 'prop-types'

const Main = ({onUploadPress, shareUrl}) => (
  <Layout style={style.container}>
    <TopNavigation
      alignment='center'
      title='zdielaj.si'
    />
    <View style={style.body}>
      {shareUrl !== null ? (
        <Text style={{color: '#fff'}}>
          {shareUrl}
        </Text>
      ) :  (
        <PickerContainer />
      )}
      <View style={style.uploadButtonWrapper}>
        <UploadButton
          onPress={onUploadPress}
        />
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
  }
});

Main.propTypes = {
  onUploadPress: PropTypes.func.isRequired,
}

export default Main;