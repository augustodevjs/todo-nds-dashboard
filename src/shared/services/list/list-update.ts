import { api } from '../../api';
import { IList } from '../types';

export const listUpdate = async (
  data: IList,
  id: number,
): Promise<void | Error> => {
  try {
    await api.put<IList>(`/AssignmentList/${id}`, data);
  } catch (error) {
    console.error(error);
    return new Error(
      (error as { message: string }).message || 'Erro ao editar a tarefa',
    );
  }
};
