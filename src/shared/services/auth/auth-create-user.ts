import { api } from '../../api/axios-config';
import { IRegister } from '../types';

export const AuthCreateUser = async (
  data: IRegister,
): Promise<void | Error> => {
  try {
    await api.post<IRegister>('/Auth/register', data);
  } catch (error: any) {
    return new Error(
      error.response?.data.erros ||
        (error as { message: string }).message ||
        'Erro no cadastro do usuário',
    );
  }
};
