export interface IRegister {
  name: string;
  email: string;
  password: string;
  passwordConfirm: string;
}

export interface IAuth {
  accessToken: string;
  user: {
    name: string;
    email: string;
  };
}
