const path = require('path');

module.exports = {
  name: 'prod',
  uiKittenStructure: {
    path: '',
    modules: []
  },
  evaPath: path.resolve(__dirname, '../node_modules/@eva-design/eva'),
  evaMaterialPath: path.resolve(__dirname, '../node_modules/@eva-design/material'),
};
