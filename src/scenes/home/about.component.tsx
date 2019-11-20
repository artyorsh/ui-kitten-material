import React from 'react';
import { StyleSheet } from 'react-native';
import {
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
import { capitalizeFirstLetter } from '../../helpers';

export const AboutScreen = (props): SafeAreaLayoutElement => (
  <SafeAreaLayout
    style={styles.safeArea}
    insets={SaveAreaInset.TOP}>
    <Toolbar
      title={`${capitalizeFirstLetter(Config.DESIGN_SYSTEM)} App`}
      onBackPress={() => props.navigation.goBack()}
    />
    <Divider/>
    <Layout style={styles.container}>
      <Text category='h4'>
        ABOUT
      </Text>
    </Layout>
  </SafeAreaLayout>
);

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
