/** @format */

import {AppRegistry} from 'react-native';
import setup from './js/page/setup';
import WelcomePage from './js/page/WelcomePage';
import HomePage from './js/page/HomePage';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => HomePage);
