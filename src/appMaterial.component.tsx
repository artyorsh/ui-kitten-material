import React from 'react';
import {
  Platform,
  StatusBar,
} from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import {
  dark,
  light,
  mapping,
} from '@eva-design/material';
import {
  ApplicationProvider,
  IconRegistry,
} from 'react-native-ui-kitten';
import { AppNavigator } from './navigation/app.navigator';
import {
  AppTheme,
  ThemeContext,
} from './theme/theme-context';
import { MaterialIconsPack } from './assets/material-icons-pack';

const themes = { light, dark };
const strictTheme = { 'text-font-family': 'roboto-regular' };
const customMapping = { strict: strictTheme };

export default (): React.ReactFragment => {

  const [theme, setTheme] = React.useState<AppTheme>(AppTheme.light);
  const { [theme]: currentTheme } = themes;

  const isDarkMode = (): boolean => {
    return theme === AppTheme.dark;
  };

  if (Platform.OS === 'android') {
    StatusBar.setBackgroundColor(currentTheme['color-primary-700']);
  }

  return (
    <React.Fragment>
      <IconRegistry icons={MaterialIconsPack}/>
      <ApplicationProvider
        mapping={mapping}
        theme={currentTheme}
        // @ts-ignore
        customMapping={customMapping}>
        <SafeAreaProvider>
          <ThemeContext.Provider value={{ theme, setTheme, isDarkMode }}>
            <AppNavigator/>
          </ThemeContext.Provider>
        </SafeAreaProvider>
      </ApplicationProvider>
    </React.Fragment>
  );
};
