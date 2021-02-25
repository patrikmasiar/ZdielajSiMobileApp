import React, {useEffect} from 'react';
import Router from './router';
import RNBootSplash from 'react-native-bootsplash';
import ErrorBoundary from './components/ErrorBoundary';
import {NavigationContainer} from '@react-navigation/native';

const App: () => React$Node = () => {
  useEffect(() => {
    RNBootSplash.hide({duration: 450});
  }, [true]);

  return (
    <ErrorBoundary>
      <NavigationContainer>
        <Router />
      </NavigationContainer>
    </ErrorBoundary>
  );
};

export default App;
