import { api } from '../../api';
import { IList } from '../types';

export const listGetById = async (id: number): Promise<IList | Error> => {
  try {
    const { data } = await api.get(`/AssignmentList/${id}`);

    if (data) {
      return data;
    }

    return new Error('Erro ao buscar a tarefa');
  } catch (error) {
    return new Error(
      (error as { message: string }).message || 'Erro ao buscar a tarefa',
    );
  }
};
