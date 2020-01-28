import React from 'react';
import { FormikContextType, useFormikContext } from 'formik';
import { Input, InputElement, InputProps } from '@ui-kitten/components';
import { AlertTriangleIcon } from '../assets/icons';

export interface FormInputProps extends InputProps {
  id: string;
}

export const FormInput = (props: FormInputProps): InputElement => {

  const { id, ...inputProps } = props;
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
      caption={error}
      onChangeText={formContext.handleChange(id)}
    />
  );
};

