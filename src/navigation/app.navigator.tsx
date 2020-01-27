import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { AuthNavigator } from './auth.navigator';
import { HomeNavigator } from './home.navigator';
import { AppRoute } from './app-routes';
import { createAppContainer } from "react-navigation";

const AppStack = createStackNavigator({
  [AppRoute.HOME]: HomeNavigator,
  [AppRoute.AUTH]: AuthNavigator,
}, {
  headerMode: 'none',
});

export const AppNavigator = createAppContainer(AppStack);

