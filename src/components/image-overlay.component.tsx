import React from 'react';
import {
  ImageBackground,
  ImageBackgroundProps,
  StyleProp,
  StyleSheet,
  View,
  ViewStyle,
} from 'react-native';
import { useTheme } from '@ui-kitten/components';

interface OverlayImageStyle extends ViewStyle {
  overlayColor?: string;
}

export interface ImageOverlayProps extends ImageBackgroundProps {
  style?: StyleProp<OverlayImageStyle>;
  children?: React.ReactNode;
}

export const ImageOverlay = (props: ImageOverlayProps): React.ReactElement => {

  const theme = useTheme();
  const { style, children, ...imageBackgroundProps } = props;
  const { overlayColor, ...imageBackgroundStyle } = StyleSheet.flatten(style);

  return (
    <ImageBackground
      {...imageBackgroundProps}
      style={imageBackgroundStyle}>
      <View style={[
        StyleSheet.absoluteFill,
        { backgroundColor: overlayColor || theme['color-primary-transparent-400'] },
      ]}/>
      {children}
    </ImageBackground>
  );
};
