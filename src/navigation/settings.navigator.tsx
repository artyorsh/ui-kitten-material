import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { AppRoute } from './app-routes';
import { SettingsScreen } from '../scenes/settings';

export const SettingsNavigator = createStackNavigator({
  [AppRoute.PROFILE]: SettingsScreen,
}, {
  headerMode: 'none',
});
