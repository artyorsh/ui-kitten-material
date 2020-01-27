import React from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';
import {
  Avatar,
  Divider,
  Layout,
  Text,
} from '@ui-kitten/components';
import { Toolbar } from '../../components/toolbar.component';
import {
  SafeAreaLayout,
  SafeAreaLayoutElement,
  SaveAreaInset,
} from '../../components/safe-area-layout.component';
import { MenuIcon } from '../../assets/icons';
import { ProfileData } from '../../data/profile.model';

const profile: ProfileData = ProfileData.mocked();

export const ProfileScreen = (props): SafeAreaLayoutElement => (
  <SafeAreaLayout
    style={styles.safeArea}
    insets={SaveAreaInset.TOP}>
    <Toolbar
      title='Material App'
      backIcon={MenuIcon}
      onBackPress={props.navigation.toggleDrawer}
    />
    <Divider/>
    <Layout style={styles.container}>
      <Text category='h1'>Heading 1</Text>
      <Text category='h2'>Heading 2</Text>
      <Text category='h3'>Heading 3</Text>
      <Text category='h4'>Heading 4</Text>
      <Text category='h5'>Heading 5</Text>
      <Text category='h6'>Heading 6</Text>
      <Text category='s1'>Subtitle 1</Text>
      <Text category='s2'>Subtitle 2</Text>
      <Text category='p1'>Paragraph 1</Text>
      <Text category='p2'>Paragraph 2</Text>
      <Text category='c1'>Caption 1</Text>
      <Text category='c2'>Caption 2</Text>
      <Text category='label'>Label</Text>
    </Layout>
  </SafeAreaLayout>
);

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  headerContainer: {},
  profileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileAvatar: {
    width: 96,
    height: 96,
    borderRadius: 48,
  },
  profileName: {
    marginHorizontal: 16,
  },
});
