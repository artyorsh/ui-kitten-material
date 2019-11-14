import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { AppRoute } from './app-routes';
import { ProfileScreen } from '../scenes/profile';

export const ProfileNavigator = createStackNavigator({
  [AppRoute.PROFILE]: ProfileScreen,
}, {
  headerMode: 'none',
});
