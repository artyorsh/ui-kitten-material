const path = require('path');

/**
 * Run UI Kitten modules in development mode, which means the local packages will be used.
 * `react-native-ui-kitten` and `eva` packages should be located at the same directory as this project.
 *
 * E.g:
 * - /
 * - /UIKittenMaterialDemo
 * - /ui-kitten/react-native-ui-kitten
 * - /ui-kitten/eva
 */
module.exports = {
  ENV: 'dev',
  UI_KITTEN_PACKAGES_PATH: path.resolve(__dirname, '../../ui-kitten/react-native-ui-kitten/src'),
  EVA_PACKAGES_PATH: path.resolve(__dirname, '../../ui-kitten/eva/packages'),
};
