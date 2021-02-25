import React, {useEffect} from 'react';
import Router from './router';
import RNBootSplash from 'react-native-bootsplash';
import ErrorBoundary from './components/ErrorBoundary';

const App: () => React$Node = () => {
  useEffect(() => {
    RNBootSplash.hide({duration: 450});
  }, [true]);

  return (
    <ErrorBoundary>
      <Router />
    </ErrorBoundary>
  );
};

export default App;
