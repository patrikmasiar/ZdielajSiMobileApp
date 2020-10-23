/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StatusBar,
} from 'react-native';
import { ApplicationProvider } from '@ui-kitten/components';
import * as eva from '@eva-design/eva';
import Application from './App';

const App: () => React$Node = () => {
  return (
    <ApplicationProvider {...eva} theme={eva.dark}>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={{flex: 1, backgroundColor: "#232b43"}}>
        <Application />
      </SafeAreaView>
    </ApplicationProvider>
  );
};


export default App;
