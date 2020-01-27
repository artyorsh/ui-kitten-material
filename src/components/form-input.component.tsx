import React from 'react';
import {
  Platform,
  StyleSheet,
} from 'react-native';
import {
  Input,
  InputElement,
  InputProps,
} from '@ui-kitten/components';
import {
  FormikContextType,
  useFormikContext,
} from 'formik';
import { AlertTriangleIcon } from '../assets/icons';

interface FormInputProps extends InputProps {
  id: string;
}

export const FormInput = ({ id, textStyle, ...inputProps }: FormInputProps): InputElement => {

  const formContext: FormikContextType<{}> = useFormikContext();

  // @ts-ignore
  const { [id]: error } = formContext.errors;

  const fieldProps: Partial<InputProps> = {
    status: error && 'danger',
    captionIcon: error && AlertTriangleIcon,
  };

  return (
    <Input
      {...inputProps}
      {...fieldProps}
      textStyle={[textStyle, styles.element]}
      caption={error}
      onChangeText={formContext.handleChange(id)}
    />
  );
};

const styles = StyleSheet.create({
  element: Platform.select({
    ios: null,
    android: { paddingVertical: 0 },
  })
});

