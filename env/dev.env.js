const path = require('path');

module.exports = {
  name: 'dev',
  uiKittenStructure: {
    path: path.resolve(__dirname, '../../ui-kitten/react-native-ui-kitten'),
    modules: [
      'src/components',
      'src/eva-icons'
    ]
  },
  evaPath: path.resolve(__dirname, '../../ui-kitten/eva/packages/eva'),
  evaMaterialPath: path.resolve(__dirname, '../../ui-kitten/eva/packages/material'),
};
