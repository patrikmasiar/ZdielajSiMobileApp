/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {SafeAreaView, StatusBar, StyleSheet} from 'react-native';
import {ApplicationProvider, IconRegistry} from '@ui-kitten/components';
import * as eva from '@eva-design/eva';
import Application from './App';
import {EvaIconsPack} from '@ui-kitten/eva-icons';
import {AppContextProvider} from './store';

const App: () => React$Node = () => {
  return (
    <>
      <IconRegistry icons={EvaIconsPack} />
      <ApplicationProvider {...eva} theme={eva.light}>
        <AppContextProvider>
          <StatusBar barStyle="light-content" />
          <SafeAreaView style={style.safeArea}>
            <Application />
          </SafeAreaView>
        </AppContextProvider>
      </ApplicationProvider>
    </>
  );
};

const style = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default App;
