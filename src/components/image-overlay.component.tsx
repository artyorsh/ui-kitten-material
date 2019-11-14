import React from 'react';
import {
  ImageBackground,
  ImageBackgroundProps,
  StyleProp,
  StyleSheet,
  View,
  ViewStyle,
} from 'react-native';
import {
  ThemeType,
  withStyles,
  ThemedComponentProps,
} from 'react-native-ui-kitten';

interface ImageOverlayStyle extends ViewStyle {
  overlayColor?: string;
}

type Override<T, U> = Omit<T, keyof U> & U;

type ImageOverlayProps = ThemedComponentProps & Override<ImageBackgroundProps, {
  style: StyleProp<ImageOverlayStyle>;
}>;

export type ImageOverlayElement = React.ReactElement<ImageOverlayProps>;

class ImageOverlayComponent extends React.Component<ImageOverlayProps> {

  private getOverlayColor = (source: string | undefined): string => {
    return source || this.props.theme['color-primary-transparent-400'];
  };

  public render(): React.ReactElement<ImageBackgroundProps> {
    const { style, children, ...restProps } = this.props;
    const { overlayColor: derivedOverlayColor, ...containerStyle } = StyleSheet.flatten(style);

    const overlayColor: string = this.getOverlayColor(derivedOverlayColor);

    return (
      <ImageBackground
        style={containerStyle}
        {...restProps}>
        <View style={[this.props.themedStyle.overlay, { backgroundColor: overlayColor }]}/>
        {children}
      </ImageBackground>
    );
  }
}

export const ImageOverlay = withStyles(ImageOverlayComponent, (theme: ThemeType) => ({
  overlay: StyleSheet.absoluteFillObject,
}));
