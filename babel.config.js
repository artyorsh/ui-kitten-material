const path = require('path');
const env = require('./env');

const monorepoResolver = require('./babel.resolver');

const evaAlias = {
  '@eva-design/eva': path.resolve(__dirname, env.evaPath),
  '@eva-design/material': path.resolve(__dirname, env.evaMaterialPath),
};

const uiKittenLocalAlias = {
  '@kitten/theme': path.resolve(__dirname, env.uiKittenStructure.path, 'src/components/theme'),
  '@kitten/ui': path.resolve(__dirname, env.uiKittenStructure.path, 'src/components/ui'),
};

const { root, alias } = monorepoResolver(env.uiKittenStructure);

const moduleResolverConfig = {
  root,
  alias: {
    ...alias,
    ...evaAlias,
    ...uiKittenLocalAlias,
  },
};

const presets = [
  'module:metro-react-native-babel-preset',
];

const plugins = [
  ['module-resolver', moduleResolverConfig],
];

module.exports = function (api) {
  api.cache(true);

  return { presets, plugins };
};
