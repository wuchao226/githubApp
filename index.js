/** @format */

import {AppRegistry} from 'react-native';
import App from './App';
import setup from './js/page/setup';
import WelcomePage from './js/page/WelcomePage';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => setup);
