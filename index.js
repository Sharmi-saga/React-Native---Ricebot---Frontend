/**
 * @format
 */

// ✅ Add these lines FIRST to support MQTT in React Native
import 'react-native-url-polyfill/auto';
import { Buffer } from 'buffer';
global.Buffer = global.Buffer || Buffer;
global.process = require('process');

import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';

import PushNotification from 'react-native-push-notification';

// ✅ Create the notification channel here
PushNotification.createChannel(
  {
    channelId: 'cooking-channel',
    channelName: 'Cooking Notifications',
    channelDescription: 'Notifications for cooking completion',
    soundName: 'default',
    importance: 4,
    vibrate: true,
  },
  (created) => console.log(`createChannel returned '${created}'`)
);

AppRegistry.registerComponent(appName, () => App);
