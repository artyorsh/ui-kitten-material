import React from 'react';
import {
  Divider,
  Tab,
  TabBar,
} from '@ui-kitten/components';
import { AppRoute } from '../../navigation/app-routes';
import {
  SafeAreaLayout,
  SafeAreaLayoutElement,
  SaveAreaInset,
} from '../../components/safe-area-layout.component';
import {
  Toolbar,
  ToolbarMenu,
} from '../../components/toolbar.component';
import {
  DoneAllIcon,
  GridIcon,
  InfoIcon,
  LogoutIcon,
  MenuIcon,
} from '../../assets/icons';

export const TodoScreen = (props): SafeAreaLayoutElement => {

  const menu: ToolbarMenu = [
    { title: 'About', icon: InfoIcon },
    { title: 'Log Out', icon: LogoutIcon },
  ];

  const onMenuItemSelect = (index: number): void => {
    const { [index]: selectedItem } = menu;

    switch (selectedItem.title) {
      case 'Log Out':
        props.navigation.navigate(AppRoute.AUTH);
        break;
      default:
        props.navigation.navigate(selectedItem.title);
        break;
    }
  };

  const onTabSelect = (index: number): void => {
    const { [index]: selectedTabRoute } = props.navigation.state.routes;
    props.navigation.navigate(selectedTabRoute.routeName);
  };

  return (
    <SafeAreaLayout insets={SaveAreaInset.TOP}>
      <Toolbar
        title='Material App'
        onMenuItemSelect={onMenuItemSelect}
        menu={menu}
        backIcon={MenuIcon}
        onBackPress={props.navigation.toggleDrawer}
      />
      <TabBar
        selectedIndex={props.navigation.state.index}
        onSelect={onTabSelect}>
        <Tab
          icon={GridIcon}
          title='IN PROGRESS'
        />
        <Tab
          icon={DoneAllIcon}
          title='DONE'
        />
      </TabBar>
      <Divider/>
    </SafeAreaLayout>
  );
};
