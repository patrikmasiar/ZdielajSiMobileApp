import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Layout } from '@ui-kitten/components';
import PickerContainer from '../containers/PickerContainer';
import PropTypes from 'prop-types'
import Footer from './Footer';
import ShareScreen from './ShareScreen';
import Navigation from './Navigation';

const Main: () => React$Node = ({
  onUploadPress,
  isLoading,
  shareUrl,
  isUploadDisabled,
  onResetApp,
}) => (
  <Layout style={style.container}>
    <Navigation canReset={shareUrl !== null} onResetApp={onResetApp} />
    <View style={style.body}>
      {shareUrl !== null ? (
        <ShareScreen
          shareUrl={shareUrl}
        />
      ) :  (
        <PickerContainer />
      )}
      <Footer
        onUploadPress={onUploadPress}
        isLoading={isLoading}
        isUploadDisabled={isUploadDisabled}
        shareUrl={shareUrl}
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