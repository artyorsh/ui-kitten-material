const path = require('path');
const monorepoResolver = require('./metro.resolver');
const env = require('./env');

const { extraNodeModules, watchFolders } = monorepoResolver(env.uiKittenStructure);

module.exports = {
  resolver: {
    extraNodeModules: {
      ...extraNodeModules,
      '@babel/runtime': path.resolve(__dirname, './node_modules/@babel/runtime'),
      'react': path.resolve(__dirname, './node_modules/react'),
      'react-native': path.resolve(__dirname, './node_modules/react-native'),
      'react-is': path.resolve(__dirname, './node_modules/react-is'),
    },
  },
  watchFolders: [
    env.evaPath,
    env.evaMaterialPath,
    ...watchFolders,
  ],
};
