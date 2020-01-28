import React from 'react';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { TodoNavigator } from './todo.navigator';
import { SettingsNavigator } from './settings.navigator';
import { AppRoute } from './app-routes';
import {
  BottomHomeScreen,
  DrawerHomeScreen,
  AboutScreen,
} from '../scenes/home';

const HomeBottomNavigator = createBottomTabNavigator({
  [AppRoute.TODO]: TodoNavigator,
  [AppRoute.PROFILE]: SettingsNavigator,
}, {
  tabBarComponent: BottomHomeScreen,
});

export const HomeNavigator = createDrawerNavigator({
  [AppRoute.HOME]: HomeBottomNavigator,
  [AppRoute.ABOUT]: AboutScreen,
}, {
  contentComponent: DrawerHomeScreen,
});


