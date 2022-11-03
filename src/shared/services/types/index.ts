export interface IRegister {
  name: string | undefined;
  email: string | undefined;
  password: string | undefined;
  passwordConfirm: string | undefined;
}

export interface IAuth {
  accessToken: string;
  user: {
    name: string;
    email: string;
  };
}
