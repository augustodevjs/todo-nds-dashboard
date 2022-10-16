import { ReactNode } from 'react';

export interface IAuthContext {
  login: (email: string, password: string) => Promise<string | void>;
  logout: () => void;
  isAuthenticated: boolean;
}

export interface IAuthProviderProps {
  children: ReactNode;
}
