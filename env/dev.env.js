const path = require('path');

module.exports = {
  name: 'dev',
  uiKittenStructure: {
    path: '../react-native-ui-kitten',
    modules: [
      'src/framework',
      'src/eva-icons'
    ]
  },
  evaPath: path.resolve(__dirname, '../../eva/packages/eva'),
  evaMaterialPath: path.resolve(__dirname, '../../eva/packages/material'),
};
