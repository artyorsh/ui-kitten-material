import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { AuthNavigator } from './auth.navigator';
import { HomeNavigator } from './home.navigator';
import { AppRoute } from './app-routes';

const AppStack = createStackNavigator({
  [AppRoute.HOME]: HomeNavigator,
  [AppRoute.AUTH]: AuthNavigator,
}, {
  headerMode: 'none',
});

export const AppNavigator = createAppContainer(AppStack);

