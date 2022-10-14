import { api } from '../../api/axios-config';

interface IRegister {
  name: string;
  email: string;
  password: string;
  passwordConfirm: string;
}

export const AuthCreateUser = async (
  data: IRegister,
): Promise<void | Error> => {
  try {
    await api.post<IRegister>('/Auth/register', data);

    return new Error('Erro no cadastro do usuário!');
  } catch (error) {
    return new Error(
      (error as { message: string }).message || 'Erro no cadastro do usuário',
    );
  }
};
