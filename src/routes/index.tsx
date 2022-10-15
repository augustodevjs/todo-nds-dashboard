import { Routes, Route } from 'react-router-dom';
import { Dashboard, SignIn, SignUp } from '../pages';
import { useAuth } from '../shared/hooks/useAuth';

export const AppRoutes = () => {
  const { isAuthenticated } = useAuth();

  return (
    <Routes>
      {isAuthenticated ? (
        <>
          <Route path="/listas" element={<Dashboard />} />
        </>
      ) : (
        <>
          <Route path="/" element={<SignIn />} />
          <Route path="/register" element={<SignUp />} />
        </>
      )}
    </Routes>
  );
};
