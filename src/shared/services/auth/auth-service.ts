import { api } from '../../api/axios-config';
import { IAuth } from '../../domain-types';

export const AuthService = async (
  email: string | undefined,
  password: string | undefined,
): Promise<IAuth | Error> => {
  try {
    const { data } = await api.post('/Auth/login', { email, password });

    if (data) {
      return data;
    }

    return new Error('Erro no Login!');
  } catch (error) {
    return new Error((error as { message: string }).message || 'Erro no Login');
  }
};
