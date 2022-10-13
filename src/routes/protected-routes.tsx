import { Navigate } from 'react-router-dom';

type ProtectedRouteProps = {
  children: JSX.Element;
};

export const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const user = localStorage.getItem('@todo_nds:user');

  if (!user) {
    return <Navigate to="/" replace />;
  }

  return children;
};
