import React from 'react';
import { StyleSheet } from 'react-native';
import { Button, Layout, Text } from '@ui-kitten/components';
import { AppRoute } from '../../navigation/app-routes';

export const TodoDoneScreen = (props): React.ReactElement => {

  const onAddTodoButtonPress = (): void => {
    props.navigation.navigate(AppRoute.TODO_IN_PROGRESS);
  };

  return (
    <Layout style={styles.container}>
      <Text category='h6'>
        No done todos yet.
      </Text>
      <Button
        style={styles.addButton}
        onPress={onAddTodoButtonPress}>
        ADD TODO
      </Button>
    </Layout>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  addButton: {
    marginVertical: 8,
  },
});
