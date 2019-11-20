/**
 * @format
 */

import { AppRegistry } from 'react-native';
import Config from 'react-native-config'
import AppEva from './src/appEva.component';
import AppMaterial from './src/appMaterial.component';
import { name as appName } from './app.json';

const getApp = () => {
  if (Config.DESIGN_SYSTEM === 'eva') {
    return AppEva;
  } else if (Config.DESIGN_SYSTEM === 'material') {
    return AppMaterial;
  } else {
    return AppEva;
  }
};

AppRegistry.registerComponent(appName, getApp);
