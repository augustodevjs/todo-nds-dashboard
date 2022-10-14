import { api } from '../../api/axios-config';

interface IAuth {
  accessToken: string;
  user: {
    name: string;
    email: string;
  };
}

export const AuthService = async (
  email: string,
  password: string,
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
