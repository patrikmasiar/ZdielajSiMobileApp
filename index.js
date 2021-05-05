/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './src';
import {name as appName} from './app.json';
import * as Sentry from '@sentry/react-native';

if (!__DEV__) {
  Sentry.init({
    dsn:
      'https://065daa1fd2e84ac09a86cbeb75b7b105@o316364.ingest.sentry.io/5751138',
  });
}

AppRegistry.registerComponent(appName, () => App);
