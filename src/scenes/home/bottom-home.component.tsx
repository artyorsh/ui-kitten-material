import React from 'react';
import {
  BottomNavigation,
  BottomNavigationTab,
  Divider,
} from '@ui-kitten/components';
import {
  SafeAreaLayout,
  SafeAreaLayoutElement,
  SaveAreaInset,
} from '../../components/safe-area-layout.component';
import {
  LayoutIcon,
  PersonIcon,
} from '../../assets/icons';

export const BottomHomeScreen = (props): SafeAreaLayoutElement => {

  const onSelect = (index: number): void => {
    const { [index]: selectedTabRoute } = props.navigation.state.routes;
    props.navigation.navigate(selectedTabRoute.routeName);
  };

  return (
    <SafeAreaLayout insets={SaveAreaInset.BOTTOM}>
      <Divider/>
      <BottomNavigation
        appearance='noIndicator'
        selectedIndex={props.navigation.state.index}
        onSelect={onSelect}>
        <BottomNavigationTab
          icon={LayoutIcon}
          title='TODO'
        />
        <BottomNavigationTab
          icon={PersonIcon}
          title='SETTINGS'
        />
      </BottomNavigation>
    </SafeAreaLayout>
  );
};
