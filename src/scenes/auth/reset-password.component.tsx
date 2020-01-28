import React from 'react';
import { StyleSheet } from 'react-native';
import { EdgeInsets, useSafeArea } from 'react-native-safe-area-context';
import { Button, Layout } from '@ui-kitten/components';
import { Formik, FormikProps } from 'formik';
import { AppRoute } from '../../navigation/app-routes';
import { FormInput } from '../../components/form-input.component';
import { Toolbar } from '../../components/toolbar.component';
import { ImageOverlay } from '../../components/image-overlay.component';
import { ResetPasswordData, ResetPasswordSchema } from '../../data/reset-password.model';

export const ResetPasswordScreen = ({ navigation }): React.ReactElement => {

  const insets: EdgeInsets = useSafeArea();

  const onFormSubmit = (values: ResetPasswordData): void => {
    navigateSignIn();
  };

  const navigateSignIn = (): void => {
    navigation.navigate(AppRoute.SIGN_IN);
  };

  const renderForm = (props: FormikProps<ResetPasswordData>): React.ReactFragment => (
    <React.Fragment>
      <FormInput
        id='email'
        style={styles.formControl}
        label='Email'
        keyboardType='email-address'
        autoCapitalize='none'
      />
      <Button
        style={styles.button}
        onPress={props.handleSubmit}>
        DONE
      </Button>
    </React.Fragment>
  );

  return (
    <React.Fragment>
      <ImageOverlay
        style={[styles.appBar, { paddingTop: insets.top }]}
        source={require('../../assets/images/image-background.jpeg')}>
        <Toolbar
          appearance='control'
          onBackPress={() => navigation.goBack()}
        />
      </ImageOverlay>
      <Layout style={styles.formContainer}>
        <Formik
          initialValues={ResetPasswordData.empty()}
          validationSchema={ResetPasswordSchema}
          onSubmit={onFormSubmit}>
          {renderForm}
        </Formik>
      </Layout>
    </React.Fragment>
  );
};

const styles = StyleSheet.create({
  appBar: {
    height: 192,
  },
  formContainer: {
    flex: 1,
    paddingVertical: 16,
    paddingHorizontal: 16,
  },
  formControl: {
    marginVertical: 4,
  },
  button: {
    marginVertical: 24,
  },
});
