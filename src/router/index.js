import React from 'react';
import {StyleSheet} from 'react-native';
import {useAppContext} from '../store';
import {SHARE_SCREEN, UPLOAD_SCREEN} from '../utils/constants';
import {Layout} from '@ui-kitten/components';

// SCREENS
import ShareScreen from '../screens/ShareScreen';
import UploadScreen from '../screens/UploadScreen';
import Navigation from '../components/Navigation';

const Router = () => {
  const {
    state: {activeScreen},
  } = useAppContext();
  let bodyComponent = null;

  switch (activeScreen) {
    case UPLOAD_SCREEN:
      bodyComponent = <UploadScreen />;
      break;
    case SHARE_SCREEN:
      bodyComponent = <ShareScreen />;
      break;
  }

  return (
    <Layout style={style.container}>
      <Navigation />
      {bodyComponent}
    </Layout>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Router;
