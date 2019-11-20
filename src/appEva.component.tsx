import React from 'react';
import {
  Platform,
  StatusBar,
} from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import {
  dark as evaDark,
  light as evaLight,
  mapping as evaMapping,
} from '@eva-design/eva';
import {
  ApplicationProvider,
  IconRegistry,
} from 'react-native-ui-kitten';
import { EvaIconsPack } from '@ui-kitten/eva-icons'
import { AppNavigator } from './navigation/app.navigator';
import {
  AppTheme,
  ThemeContext,
} from './theme/theme-context';

const evaThemes = { light: evaLight, dark: evaDark };

export default (): React.ReactFragment => {

  const [theme, setTheme] = React.useState<AppTheme>(AppTheme.light);
  const { [theme]: currentTheme } = evaThemes;

  const isDarkMode = (): boolean => {
    return theme === AppTheme.dark;
  };

  if (Platform.OS === 'android') {
    StatusBar.setBackgroundColor(currentTheme['color-primary-700']);
  }

  return (
    <React.Fragment>
      <IconRegistry icons={EvaIconsPack}/>
      <ApplicationProvider
        mapping={evaMapping}
        theme={currentTheme}>
        <SafeAreaProvider>
          <ThemeContext.Provider value={{ theme, setTheme, isDarkMode }}>
            <AppNavigator/>
          </ThemeContext.Provider>
        </SafeAreaProvider>
      </ApplicationProvider>
    </React.Fragment>
  );
};
