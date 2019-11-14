import React from 'react';
import { StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export const MaterialIconsPack = {
  name: 'material',
  icons: createIconsMap(),
};

function createIconsMap() {
  return new Proxy({}, {
    get(target, name) {
      return IconProvider(name);
    },
  });
}

const IconProvider = (name) => ({
  toReactElement: (props) => props.style && MaterialIcon({ name, ...props }),
});

function MaterialIcon(props) {
  const { name, style } = props;
  const { height, tintColor, ...iconStyle } = StyleSheet.flatten(style);

  return (
    <Icon name={name} size={height} color={tintColor} style={iconStyle} />
  );
}
