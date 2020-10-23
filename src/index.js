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
import { ApplicationProvider, IconRegistry, } from '@ui-kitten/components';
import * as eva from '@eva-design/eva';
import Application from './App';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import { AppContextProvider } from './store';

const App: () => React$Node = () => {
  return (
    <>
      <IconRegistry icons={EvaIconsPack} />
      <ApplicationProvider {...eva} theme={eva.dark}>
        <AppContextProvider>
          <StatusBar barStyle="dark-content" />
          <SafeAreaView style={{flex: 1, backgroundColor: "#232b43"}}>
            <Application />
          </SafeAreaView>
        </AppContextProvider>
      </ApplicationProvider>
    </>
  );
};


export default App;
