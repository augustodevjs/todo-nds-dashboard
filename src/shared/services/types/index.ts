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

export interface IList {
  name: string;
}

export interface IListItens {
  data: IList[];
}

type Assignments = {
  id: number;
  description: string;
  concluded: boolean;
  assignmentList: string;
};

export type AssignmentList = {
  name: string;
  assignments?: Assignments[];
};
