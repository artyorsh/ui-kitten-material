import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { createMaterialTopTabNavigator } from 'react-navigation-tabs';
import { AppRoute } from './app-routes';
import {
  TodoDetailsScreen,
  TodoDoneScreen,
  TodoInProgressScreen,
  TodoScreen,
} from '../scenes/todo';


const TodoTabsNavigator = createMaterialTopTabNavigator({
  [AppRoute.TODO_IN_PROGRESS]: TodoInProgressScreen,
  [AppRoute.TODO_DONE]: TodoDoneScreen,
}, {
  tabBarComponent: TodoScreen,
});

export const TodoNavigator = createStackNavigator({
  [AppRoute.TODO]: TodoTabsNavigator,
  [AppRoute.TODO_DETAILS]: TodoDetailsScreen,
}, {
  headerMode: 'none',
});
