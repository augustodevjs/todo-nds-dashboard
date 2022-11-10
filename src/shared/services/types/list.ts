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
