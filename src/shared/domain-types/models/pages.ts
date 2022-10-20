export interface ISignInForm {
  email: string;
  password: string;
}

export interface ISignUpForm {
  name: string | undefined;
  email: string | undefined;
  password: string | undefined;
  passwordConfirm: string | undefined;
}
