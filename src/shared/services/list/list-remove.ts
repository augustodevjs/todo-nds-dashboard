import { api } from '../../api';

export const ListRemove = async (id: number): Promise<void | Error> => {
  try {
    await api.delete(`/AssignmentList/${id}`);
  } catch (error) {
    console.error(error);
    return new Error(
      (error as { message: string }).message || 'Erro ao remover a tarefa',
    );
  }
};
