import React from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';
import {
  Button,
  Layout,
  LayoutElement,
  Text,
} from 'react-native-ui-kitten';
import {
  EdgeInsets,
  useSafeArea,
} from 'react-native-safe-area-context';
import { Toolbar } from '../../components/toolbar.component';
import { ImageOverlay } from '../../components/image-overlay.component';
import { ProgressBar } from '../../components/progress-bar.component';
import { Todo } from '../../data/todo.model';

export interface TodoDetailsRouteParams {
  todo: Todo;
}

export const TodoDetailsScreen = (props): LayoutElement => {

  const todo: Todo = props.navigation.getParam('todo');
  const insets: EdgeInsets = useSafeArea();

  return (
    <React.Fragment>
      <ImageOverlay
        style={[styles.appBar, { paddingTop: insets.top }]}
        source={require('../../assets/images/image-background.jpeg')}>
        <Toolbar
          appearance='control'
          onBackPress={() => props.navigation.goBack()}
        />
        <Text
          style={styles.title}
          category='h4'
          status='control'>
          {todo.title}
        </Text>
      </ImageOverlay>
      <Layout style={styles.container}>
        <View style={styles.detailsContainer}>
          <ProgressBar
            style={styles.progressBar}
            progress={todo.progress}
            text={`${todo.progress}%`}
          />
          <Text>
            {todo.description}
          </Text>
        </View>
        <Button
          onPress={() => props.navigation.goBack()}>
          COMPLETE
        </Button>
      </Layout>
    </React.Fragment>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  container: {
    flex: 1,
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  detailsContainer: {
    flex: 1,
  },
  appBar: {
    height: 192,
  },
  title: {
    position: 'absolute',
    marginHorizontal: 16,
    bottom: 16,
  },
  progressBar: {
    width: '50%',
    marginVertical: 16,
  },
});
