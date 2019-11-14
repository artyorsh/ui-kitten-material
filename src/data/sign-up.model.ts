import * as Yup from 'yup';

export class SignUpData {

  constructor(
    readonly email: string,
    readonly firstname: string,
    readonly lastname: string,
    readonly role: string) {

  }

  static empty(): SignUpData {
    return new SignUpData(
      '',
      '',
      '',
      '',
    );
  }
}

export const SignUpSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email'),
  role: Yup.string().min(1, 'Role can not be empty'),
});

