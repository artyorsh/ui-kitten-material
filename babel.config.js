const path = require('path');
const env = require('./env');

const frameworkAlias = {
  '@eva-design/dss': path.resolve(env.EVA_PACKAGES_PATH, 'dss'),
  '@eva-design/material': path.resolve(env.EVA_PACKAGES_PATH, 'material'),
  '@eva-design/processor': path.resolve(env.EVA_PACKAGES_PATH, 'processor'),
  '@ui-kitten/components': path.resolve(env.UI_KITTEN_PACKAGES_PATH, 'components'),
  '@ui-kitten/eva-icons': path.resolve(env.UI_KITTEN_PACKAGES_PATH, 'eva-icons'),
};

const frameworkInternalAlias = {
  '@kitten/theme': path.resolve(env.UI_KITTEN_PACKAGES_PATH, 'components/theme'),
  '@kitten/ui': path.resolve(env.UI_KITTEN_PACKAGES_PATH, 'components/ui'),
};

const moduleResolverConfig = {
  root: path.resolve('./'),
  alias: {
    ...frameworkAlias,
    ...frameworkInternalAlias,
  },
};

module.exports = function (api) {
  api.cache(true);

  const presets = [
    'module:metro-react-native-babel-preset',
  ];

  const plugins = [
    ['module-resolver', moduleResolverConfig],
  ];

  return { presets, plugins };
};
