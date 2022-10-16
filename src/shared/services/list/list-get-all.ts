export const listGetAll = async () => {
  try {
    return new Error('Erro ao listar as tarefas');
  } catch (error) {
    console.error(error);
    return new Error(
      (error as { message: string }).message || 'Erro ao listar as tarefas',
    );
  }
};
