import { createContext, ReactNode, useState } from 'react';
import { api } from '../api';

interface IUser {
  accessToken: string;
  user: {
    name: string;
    email: string;
  };
}

interface IAuthContext {
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  user: IUser[];
}

interface IAuthProviderProps {
  children: ReactNode;
}

export const AuthContext = createContext<IAuthContext>({} as IAuthContext);

export const AuthProvider: React.FC<IAuthProviderProps> = ({ children }) => {
  const [data, setData] = useState<IUser[]>([]);

  const login = async (email: string, password: string) => {
    try {
      const response = await api.post<IUser>('/Auth/login', {
        email,
        password,
      });

      const { accessToken, user } = response.data;

      console.log({ accessToken, user });
    } catch (error) {
      alert('Não foi possível fazer o login');
    }
  };

  const logout = () => {};

  return (
    <AuthContext.Provider value={{ login, logout, user: data }}>
      {children}
    </AuthContext.Provider>
  );
};
