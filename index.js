/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './src';
import {name as appName} from './app.json';
import * as Sentry from '@sentry/react-native';
import {SENTRY_DNS} from './src/env';

if (!__DEV__) {
  Sentry.init({
    dsn: SENTRY_DNS,
  });
}

AppRegistry.registerComponent(appName, () => App);
