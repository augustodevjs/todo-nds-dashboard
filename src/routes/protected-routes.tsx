import { Outlet, Navigate } from 'react-router-dom';
import { useAuth } from '../shared/hooks/useAuth';

export const PrivateRoutes = () => {
  const { user } = useAuth();

  return user?.accessToken ? <Outlet /> : <Navigate to="/" />;
};
