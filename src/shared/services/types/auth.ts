export interface IAuth {
  accessToken: string;
  user: {
    name: string;
    email: string;
  };
}
