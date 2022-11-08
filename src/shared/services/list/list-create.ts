import { api } from '../../api';
import { IList } from '../types';

export const ListCreate = async (data: IList): Promise<void | Error> => {
  try {
    await api.post<IList>('/AssignmentList', data);
  } catch (error) {
    return new Error(
      (error as { message: string }).message || 'Erro ao criar a tarefa',
    );
  }
};
