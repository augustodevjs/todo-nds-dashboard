import { createContext, ReactNode, useEffect, useState } from 'react';
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
  user: IUser | undefined;
}

interface IAuthProviderProps {
  children: ReactNode;
}

export const AuthContext = createContext<IAuthContext>({} as IAuthContext);

export const AuthProvider: React.FC<IAuthProviderProps> = ({ children }) => {
  const [data, setData] = useState<IUser>();

  const login = async (email: string, password: string) => {
    try {
      const response = await api.post<IUser>('/Auth/login', {
        email,
        password,
      });

      const { accessToken, user } = response.data;

      localStorage.setItem('@todo_nds:user', JSON.stringify(user));
      localStorage.setItem('@todo_nds:accessToken', accessToken);

      api.defaults.headers.common.Authorization = `Bearer ${accessToken}`;
      setData({ accessToken, user });
    } catch (error) {
      alert('Não foi possível fazer o login');
    }
  };

  useEffect(() => {
    const accessToken = localStorage.getItem('@todo_nds:accessToken');
    const user = localStorage.getItem('@todo_nds:user');

    if (accessToken && user) {
      api.defaults.headers.common.Authorization = `Bearer ${accessToken}`;

      setData({ accessToken, user: JSON.parse(user) });
    }
  }, []);

  const logout = () => {
    localStorage.removeItem('@todo_nds:user');
    localStorage.removeItem('@todo_nds:accessToken');

    setData(undefined);
  };

  return (
    <AuthContext.Provider value={{ login, logout, user: data }}>
      {children}
    </AuthContext.Provider>
  );
};
