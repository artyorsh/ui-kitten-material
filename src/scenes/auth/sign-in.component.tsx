import React from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';
import {
  Button,
  CheckBox,
  Layout,
} from 'react-native-ui-kitten';
import {
  Formik,
  FormikProps,
} from 'formik';
import { AppRoute } from '../../navigation/app-routes';
import { FormInput } from '../../components/form-input.component';
import { ImageOverlay } from '../../components/image-overlay.component';
import {
  EyeIcon,
  EyeOffIcon,
} from '../../assets/icons';
import {
  SignInData,
  SignInSchema,
} from '../../data/sign-in.model';

export const SignInScreen = (props) => {

  const [shouldRemember, setShouldRemember] = React.useState<boolean>(false);
  const [passwordVisible, setPasswordVisible] = React.useState<boolean>(false);

  const onFormSubmit = (values: SignInData): void => {
    navigateHome();
  };

  const navigateHome = (): void => {
    props.navigation.navigate(AppRoute.HOME);
  };

  const navigateSignUp = (): void => {
    props.navigation.navigate(AppRoute.SIGN_UP);
  };

  const navigateResetPassword = (): void => {
    props.navigation.navigate(AppRoute.RESET_PASSWORD);
  };

  const onRememberMeChange = (shouldRemember: boolean): void => {
    setShouldRemember(shouldRemember);
  };

  const onPasswordIconPress = (): void => {
    setPasswordVisible(!passwordVisible);
  };

  const renderForm = (props: FormikProps<SignInData>): React.ReactFragment => (
    <React.Fragment>
      <FormInput
        id='email'
        style={styles.formControl}
        label='Email'
        keyboardType='email-address'
        autoCapitalize='none'
      />
      <FormInput
        id='password'
        style={styles.formControl}
        label='Password'
        secureTextEntry={!passwordVisible}
        icon={passwordVisible ? EyeIcon : EyeOffIcon}
        onIconPress={onPasswordIconPress}
      />
      <View style={styles.resetPasswordContainer}>
        <CheckBox
          style={styles.formControl}
          checked={shouldRemember}
          onChange={onRememberMeChange}
          text='Remember Me'
        />
        <Button
          appearance='ghost'
          status='basic'
          onPress={navigateResetPassword}>
          Forgot password?
        </Button>
      </View>
      <Button
        style={styles.submitButton}
        onPress={props.handleSubmit}>
        SIGN IN
      </Button>
    </React.Fragment>
  );

  return (
    <React.Fragment>
      <ImageOverlay
        style={styles.appBar}
        source={require('../../assets/images/image-background.jpeg')}
      />
      <Layout style={styles.formContainer}>
        <Formik
          initialValues={SignInData.empty()}
          validationSchema={SignInSchema}
          onSubmit={onFormSubmit}>
          {renderForm}
        </Formik>
        <Button
          style={styles.noAccountButton}
          appearance='ghost'
          status='basic'
          onPress={navigateSignUp}>
          Don't have an account?
        </Button>
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
  resetPasswordContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  formControl: {
    marginVertical: 4,
  },
  submitButton: {
    marginVertical: 24,
  },
  noAccountButton: {
    alignSelf: 'center',
  },
});
