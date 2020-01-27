import React from 'react';
import { StatusBar } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import {
  dark,
  light,
  mapping,
} from '@eva-design/material';
import {
  ApplicationProvider,
  IconRegistry,
} from '@ui-kitten/components';
import { AppNavigator } from './navigation/app.navigator';
import {
  AppTheme,
  ThemeContext,
} from './theme/theme-context';
import { MaterialIconsPack } from './assets/material-icons-pack';

const themes = { light, dark };
const strictTheme = { 'text-font-family': 'Roboto-Regular' };
const customMapping = { strict: strictTheme };

export default (): React.ReactFragment => {

  const [theme, setTheme] = React.useState<AppTheme>(AppTheme.light);
  const { [theme]: currentTheme } = themes;

  const isDarkMode = (): boolean => {
    return theme === AppTheme.dark;
  };

  return (
    <React.Fragment>
      <IconRegistry icons={MaterialIconsPack}/>
      <ApplicationProvider
        mapping={mapping}
        theme={currentTheme}
        customMapping={customMapping}>
        <SafeAreaProvider>
          <ThemeContext.Provider value={{ theme, setTheme, isDarkMode }}>
            <StatusBar backgroundColor={currentTheme['color-primary-700']} />
            <AppNavigator/>
          </ThemeContext.Provider>
        </SafeAreaProvider>
      </ApplicationProvider>
    </React.Fragment>
  );
};
