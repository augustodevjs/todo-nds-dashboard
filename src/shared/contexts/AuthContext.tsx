import {
  createContext,
  ReactNode,
  useCallback,
  useEffect,
  useState,
} from 'react';
import { api } from '../api';

interface User {
  accessToken: string;
  user: {
    name: string;
    email: string;
  };
}

interface IAuthContext {
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  isAuthenticated: boolean;
}

interface IAuthProviderProps {
  children: ReactNode;
}

export const AuthContext = createContext<IAuthContext>({} as IAuthContext);

export const AuthProvider: React.FC<IAuthProviderProps> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const accessToken = localStorage.getItem('@todo_nds:accessToken');
    const user = localStorage.getItem('@todo_nds:user');

    if (accessToken && user) {
      api.defaults.headers.common.Authorization = `Bearer ${accessToken}`;
      setIsAuthenticated(true);
    }
  }, []);

  const login = useCallback(async (email: string, password: string) => {
    try {
      const response = await api.post<User>('/Auth/login', {
        email,
        password,
      });

      const { accessToken, user } = response.data;

      localStorage.setItem('@todo_nds:user', JSON.stringify(user));
      localStorage.setItem('@todo_nds:accessToken', accessToken);

      api.defaults.headers.common.Authorization = `Bearer ${accessToken}`;

      setIsAuthenticated(true);
    } catch (error) {
      alert('Não foi possível fazer o login');
    }
  }, []);

  const logout = useCallback(() => {
    setIsAuthenticated(false);
    localStorage.removeItem('@todo_nds:user');
    localStorage.removeItem('@todo_nds:accessToken');
  }, []);

  return (
    <AuthContext.Provider value={{ login, logout, isAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
};
