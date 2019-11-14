import React from 'react';
import { StyleSheet } from 'react-native';
import {
  EdgeInsets,
  useSafeArea,
} from 'react-native-safe-area-context';
import {
  Formik,
  FormikProps,
} from 'formik';
import {
  Button,
  CheckBox,
  Layout,
  LayoutElement,
  Select,
  SelectOption,
  SelectOptionType,
} from 'react-native-ui-kitten';
import { AppRoute } from '../../navigation/app-routes';
import { Toolbar } from '../../components/toolbar.component';
import { FormInput } from '../../components/form-input.component';
import { ImageOverlay } from '../../components/image-overlay.component';
import {
  SignUpData,
  SignUpSchema,
} from '../../data/sign-up.model';

export const SignUpScreen = (props): LayoutElement => {

  const insets: EdgeInsets = useSafeArea();
  const [selectedRole, setSelectedRole] = React.useState<SelectOptionType>(null);
  const [termsAccepted, setTermsAccepted] = React.useState<boolean>(false);

  const onFormSubmit = (values: SignUpData): void => {
    // const formData: SignUpData = { ...values, role: selectedRole.text };
    navigateHome();
  };

  const onRoleChange = (role: SelectOption): void => {
    setSelectedRole(role);
  };

  const onTermsAcceptedChange = (termsAccepted: boolean): void => {
    setTermsAccepted(termsAccepted);
  };

  const navigateHome = (): void => {
    props.navigation.navigate(AppRoute.HOME);
  };

  const navigateSignIn = (): void => {
    props.navigation.navigate(AppRoute.SIGN_IN);
  };

  const toSelectOption = (role: string): SelectOptionType => ({
    text: role,
  });

  const renderForm = (props: FormikProps<SignUpData>): React.ReactFragment => (
    <React.Fragment>
      <FormInput
        id='email'
        style={styles.formControl}
        label='Email'
        keyboardType='email-address'
        autoCapitalize='none'
      />
      <FormInput
        id='firstname'
        style={styles.formControl}
        label='First Name'
      />
      <FormInput
        id='lastname'
        style={styles.formControl}
        label='Last Name'
      />
      <Select
        style={styles.formControl}
        label='Role on project'
        placeholder=''
        data={['Developer', 'Designer', 'Product Manager'].map(toSelectOption)}
        selectedOption={selectedRole}
        onSelect={onRoleChange}
      />
      <CheckBox
        style={{ marginVertical: 16 }}
        checked={termsAccepted}
        onChange={onTermsAcceptedChange}
        text='I agree to Terms and Conditions'
      />
      <Button
        style={styles.submitButton}
        onPress={props.handleSubmit}>
        SIGN UP
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
          onBackPress={() => props.navigation.goBack()}
        />
      </ImageOverlay>
      <Layout style={styles.formContainer}>
        <Formik
          initialValues={SignUpData.empty()}
          validationSchema={SignUpSchema}
          onSubmit={onFormSubmit}>
          {renderForm}
        </Formik>
        <Button
          style={styles.haveAccountButton}
          appearance='ghost'
          status='basic'
          onPress={navigateSignIn}>
          Already have an account?
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
  formControl: {
    marginVertical: 4,
  },
  submitButton: {
    marginVertical: 24,
  },
  haveAccountButton: {
    alignSelf: 'center',
  },
});
