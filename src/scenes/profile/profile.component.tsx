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
} from 'react-native-ui-kitten';
import Config from 'react-native-config';
import { Toolbar } from '../../components/toolbar.component';
import {
  SafeAreaLayout,
  SafeAreaLayoutElement,
  SaveAreaInset,
} from '../../components/safe-area-layout.component';
import { MenuIcon } from '../../assets/icons';
import { ProfileData } from '../../data/profile.model';
import { capitalizeFirstLetter } from '../../helpers';

const profile: ProfileData = ProfileData.mocked();

export const ProfileScreen = (props): SafeAreaLayoutElement => (
  <SafeAreaLayout
    style={styles.safeArea}
    insets={SaveAreaInset.TOP}>
    <Toolbar
      title={`${capitalizeFirstLetter(Config.DESIGN_SYSTEM)} App`}
      backIcon={MenuIcon}
      onBackPress={props.navigation.toggleDrawer}
    />
    <Divider/>
    <Layout style={styles.container}>
      <View style={styles.profileContainer}>
        <Avatar
          style={styles.profileAvatar}
          source={profile.avatar}
        />
        <Text
          style={styles.profileName}
          category='h4'>
          {profile.fullname}
        </Text>
      </View>
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
