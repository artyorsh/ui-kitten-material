import React from 'react';
import { View, ViewProps } from 'react-native';
import { StyleService, Text, useStyleSheet } from '@ui-kitten/components';

export interface ProgressBarProps extends ViewProps {
  progress: number;
  text?: string;
}

export const ProgressBar = (props: ProgressBarProps): React.ReactElement => {

  const styles = useStyleSheet(themedStyles);
  const { progress, text, ...viewProps } = props;

  return (
    <View style={styles.container}>
      <View
        {...viewProps}
        style={[styles.progressContainer, props.style]}>
        <View style={[styles.progress, { width: `${progress}%` }]}/>
      </View>
      {text && <Text style={styles.text} appearance='hint' category='c2'>{text}</Text>}
    </View>
  );
};

const themedStyles = StyleService.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  progressContainer: {
    height: 8,
    borderRadius: 4,
    backgroundColor: 'background-basic-color-2',
    overflow: 'hidden',
  },
  progress: {
    flex: 1,
    backgroundColor: 'color-primary-default',
  },
  text: {
    marginHorizontal: 16,
  },
});

