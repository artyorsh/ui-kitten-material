import React from 'react';
import {
  createStackNavigator,
} from 'react-navigation-stack';
import { AppRoute } from './app-routes';
import {
  SignInScreen,
  SignUpScreen,
  ResetPasswordScreen,
} from '../scenes/auth';

export const AuthNavigator = createStackNavigator({
  [AppRoute.SIGN_IN]: SignInScreen,
  [AppRoute.SIGN_UP]: SignUpScreen,
  [AppRoute.RESET_PASSWORD]: ResetPasswordScreen,
}, {
  headerMode: 'none',
});
