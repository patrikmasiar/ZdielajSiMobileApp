import React, {useEffect} from 'react';
import Router from './router';
import RNBootSplash from 'react-native-bootsplash';

const App: () => React$Node = () => {
  useEffect(() => {
    RNBootSplash.hide({duration: 450});
  }, [true]);

  return <Router />;
};

export default App;
