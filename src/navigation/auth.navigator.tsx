import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { AppRoute } from './app-routes';
import { ResetPasswordScreen, SignInScreen, SignUpScreen } from '../scenes/auth';

export const AuthNavigator = createStackNavigator({
  [AppRoute.SIGN_IN]: SignInScreen,
  [AppRoute.SIGN_UP]: SignUpScreen,
  [AppRoute.RESET_PASSWORD]: ResetPasswordScreen,
}, {
  headerMode: 'none',
});
