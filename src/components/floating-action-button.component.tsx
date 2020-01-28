import React from 'react';
import { StyleSheet } from 'react-native';
import { Button, ButtonProps } from '@ui-kitten/components';

export const FloatingActionButton = (props: ButtonProps): React.ReactElement => (
  <Button
    size='large'
    {...props}
    style={[styles.button, props.style]}
  />
);

const styles = StyleSheet.create({
  button: {
    position: 'absolute',
    bottom: 16,
    right: 16,
    width: 56,
    height: 56,
    borderRadius: 28,
  },
});
