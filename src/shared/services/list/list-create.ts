import { api } from '../../api';
import { IList } from '../types';

export const ListCreate = async (dataList: IList): Promise<IList | Error> => {
  try {
    const { data } = await api.post<IList>('/AssignmentList', dataList);

    if (data) {
      return data;
    }

    return new Error('Erro ao criar a tarefa.');
  } catch (error) {
    return new Error(
      (error as { message: string }).message || 'Erro ao criar a tarefa',
    );
  }
};
