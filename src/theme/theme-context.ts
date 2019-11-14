import React from 'react';

interface ThemeContextDescriptor {
  theme: AppTheme;
  setTheme: (theme: AppTheme) => void;
  isDarkMode: () => boolean;
}

export enum AppTheme {
  light = 'light',
  dark = 'dark',
}

export const ThemeContext = React.createContext<ThemeContextDescriptor>({
  theme: AppTheme.light,
  setTheme: (theme: AppTheme) => {},
  isDarkMode: (): boolean => false,
});
