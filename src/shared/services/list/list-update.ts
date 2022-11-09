import { api } from '../../api';
import { IList } from '../types';

export const ListUpdate = async (
  data: IList,
  id: number,
): Promise<IList | Error> => {
  try {
    const response = await api.put<IList>(`/AssignmentList/${id}`, data);

    if (response) {
      return response.data;
    }

    return new Error('Erro ao editar a tarefa');
  } catch (error) {
    console.error(error);
    return new Error(
      (error as { message: string }).message || 'Erro ao editar a tarefa',
    );
  }
};
