import { api } from '../../api';
import { IListItens } from '../types';

export const listGetAll = async (): Promise<IListItens | Error> => {
  try {
    const { data } = await api.get('/AssignmentList');

    if (data) {
      return data;
    }

    return new Error('Erro ao listar as tarefas');
  } catch (error) {
    console.error(error);
    return new Error(
      (error as { message: string }).message || 'Erro ao listar as tarefas',
    );
  }
};
