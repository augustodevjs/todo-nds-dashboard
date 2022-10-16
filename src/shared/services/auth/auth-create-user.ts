import { api } from '../../api/axios-config';
import { IRegister } from '../../domain-types';

export const AuthCreateUser = async (
  data: IRegister,
): Promise<void | Error> => {
  try {
    await api.post<IRegister>('/Auth/register', data);
  } catch (error) {
    return new Error(
      (error as { message: string }).message || 'Erro no cadastro do usuário',
    );
  }
};
