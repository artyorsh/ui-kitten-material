import React from 'react';
import { ListRenderItemInfo } from 'react-native';
import {
  Input,
  Layout,
  List,
  ListItem,
  StyleService,
  Text,
  useStyleSheet,
} from '@ui-kitten/components';
import { AppRoute } from '../../navigation/app-routes';
import { ProgressBar } from '../../components/progress-bar.component';
import { FloatingActionButton } from "../../components/floating-action-button.component";
import { PlusIcon, SearchIcon } from '../../assets/icons';
import { Todo } from '../../data/todo.model';

const allTodos: Todo[] = [
  Todo.mocked0(),
  Todo.mocked1(),
  Todo.mocked2(),
  Todo.mocked0(),
  Todo.mocked1(),
  Todo.mocked2(),
  Todo.mocked0(),
  Todo.mocked1(),
  Todo.mocked2(),
];

export const TodoInProgressScreen = ({ navigation }): React.ReactElement => {

  const styles = useStyleSheet(themedStyles);
  const [todos, setTodos] = React.useState<Todo[]>(allTodos);
  const [query, setQuery] = React.useState<string>('');

  const onChangeQuery = (query: string): void => {
    const nextTodos: Todo[] = allTodos.filter((todo: Todo): boolean => {
      return todo.title.toLowerCase().includes(query.toLowerCase());
    });

    setTodos(nextTodos);
    setQuery(query);
  };

  const navigateTodoDetails = (todoIndex: number): void => {
    const { [todoIndex]: todo } = todos;
    navigation.navigate(AppRoute.TODO_DETAILS, { todo });
  };

  const renderTodo = ({ item }: ListRenderItemInfo<Todo>): React.ReactElement => (
    <ListItem
      style={styles.item}
      onPress={navigateTodoDetails}>
      <Text category='s1'>
        {item.title}
      </Text>
      <Text
        appearance='hint'
        category='c1'>
        {item.description}
      </Text>
      <ProgressBar
        style={styles.itemProgressBar}
        progress={item.progress}
        text={`${item.progress}%`}
      />
    </ListItem>
  );

  return (
    <Layout style={styles.container}>
      <Input
        style={styles.filterInput}
        placeholder='Search'
        value={query}
        icon={SearchIcon}
        onChangeText={onChangeQuery}
      />
      <List
        data={todos}
        renderItem={renderTodo}
      />
      <FloatingActionButton icon={PlusIcon}/>
    </Layout>
  );
};

const themedStyles = StyleService.create({
  container: {
    flex: 1,
  },
  filterInput: {
    marginTop: 8,
    marginBottom: 4,
    marginHorizontal: 8,
  },
  item: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    paddingHorizontal: 12,
  },
  itemProgressBar: {
    width: '50%',
    marginVertical: 12,
  },
});


