import {
  createContext,
  ReactNode,
  useCallback,
  useEffect,
  useState,
} from 'react';
import { api } from '../api/axios-config';
import { AuthService } from '../services';

interface IAuthContext {
  login: (email: string, password: string) => Promise<string | void>;
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
    const user = localStorage.getItem('@todo_nds:user');
    const accessToken = localStorage.getItem('@todo_nds:accessToken');

    if (accessToken && user) {
      api.defaults.headers.common.Authorization = `Bearer ${accessToken}`;
      setIsAuthenticated(true);
    }
  }, []);

  const login = useCallback(async (email: string, password: string) => {
    const result = await AuthService(email, password);

    if (result instanceof Error) {
      return result.message;
    } else {
      localStorage.setItem('@todo_nds:user', JSON.stringify(result.user));
      localStorage.setItem('@todo_nds:accessToken', result.accessToken);

      api.defaults.headers.common.Authorization = `Bearer ${result.accessToken}`;
    }

    setIsAuthenticated(true);
  }, []);

  const logout = useCallback(() => {
    localStorage.removeItem('@todo_nds:user');
    localStorage.removeItem('@todo_nds:accessToken');

    setIsAuthenticated(false);
  }, []);

  return (
    <AuthContext.Provider value={{ login, logout, isAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
};
