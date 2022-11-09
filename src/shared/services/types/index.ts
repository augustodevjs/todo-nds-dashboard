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
  id?: number;
  name: string;
  assignments?: Assignments[];
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
  id?: number;
  name: string;
  assignments?: Assignments[];
};
