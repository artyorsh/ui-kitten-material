import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Avatar, Drawer, MenuItemType, Text } from '@ui-kitten/components';
import { AppRoute } from '../../navigation/app-routes';
import { AppTheme, ThemeContext } from '../../theme/theme-context';
import { ImageOverlay } from '../../components/image-overlay.component';
import { HomeIcon, InfoIcon, LogoutIcon, PaletteIcon } from '../../assets/icons';
import { ProfileData } from '../../data/profile.model';

const drawerData: MenuItemType[] = [
  {
    icon: HomeIcon,
    title: 'Home',
  },
  {
    icon: InfoIcon,
    title: 'About',
  },
  {
    icon: PaletteIcon,
    title: 'Switch Theme',
  },
  {
    icon: LogoutIcon,
    title: 'Log Out',
  },
];

const profile: ProfileData = ProfileData.mocked();

const DrawerHeader = (): React.ReactElement => (
  <ImageOverlay
    style={styles.header}
    source={require('../../assets/images/image-background.jpeg')}>
    <View style={styles.profileContainer}>
      <Avatar
        size='giant'
        source={profile.avatar}
      />
      <Text
        style={styles.profileName}
        category='h6'
        status='control'>
        {profile.fullname}
      </Text>
    </View>
  </ImageOverlay>
);

export const DrawerHomeScreen = ({ navigation }): React.ReactElement => {

  const themeContext = React.useContext(ThemeContext);

  const onMenuItemSelect = (index: number): void => {
    const { [index]: selectedItem } = drawerData;

    switch (selectedItem.title) {
      case 'Log Out':
        navigation.navigate(AppRoute.AUTH);
        break;
      case 'Switch Theme':
        switchTheme();
        break;
      default:
        navigation.navigate(selectedItem.title);
        break;
    }

    navigation.closeDrawer();
  };

  const switchTheme = (): void => {
    const nextTheme: AppTheme = themeContext.isDarkMode() ? AppTheme.light : AppTheme.dark;
    themeContext.setTheme(nextTheme);
  };

  return (
    <Drawer
      data={drawerData}
      onSelect={onMenuItemSelect}
      header={DrawerHeader}
    />
  );
};

const styles = StyleSheet.create({
  header: {
    height: 160,
    paddingHorizontal: 16,
    paddingTop: 48,
    paddingBottom: 16,
  },
  profileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileName: {
    marginHorizontal: 16,
  },
});
