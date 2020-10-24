import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Layout, TopNavigation  } from '@ui-kitten/components';
import PickerContainer from '../containers/PickerContainer';
import PropTypes from 'prop-types'
import Footer from './Footer';

const Main: () => React$Node = ({
  onUploadPress,
  isLoading,
  shareUrl,
  isUploadDisabled,
}) => (
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
      <Footer
        onUploadPress={onUploadPress}
        isLoading={isLoading}
        isUploadDisabled={isUploadDisabled}
      />
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
});

Main.propTypes = {
  onUploadPress: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
  isUploadDisabled: PropTypes.bool.isRequired,
  shareUrl: PropTypes.string,
};

Main.defaultProps = {
  shareUrl: null,
}

export default Main;