import { api } from '../../api';
import { AssignmentList } from '../types';

export const ListGetAll = async (): Promise<AssignmentList[] | Error> => {
  try {
    const { data } = await api.get('/AssignmentList');

    if (data) {
      return data.items;
    }

    return new Error('Erro ao listar as tarefas');
  } catch (error) {
    return new Error(
      (error as { message: string }).message || 'Erro ao listar as tarefas',
    );
  }
};
