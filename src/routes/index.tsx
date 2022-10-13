import { Routes, Route } from 'react-router-dom';
import { Dashboard, SignIn, SignUp } from '../pages';
import { useAuth } from '../shared/hooks/useAuth';

export const AppRoutes = () => {
  const { user } = useAuth();

  return (
    <Routes>
      {user ? (
        <Route path="/" element={<Dashboard />} />
      ) : (
        <>
          <Route path="/" element={<SignIn />} />
          <Route path="/register" element={<SignUp />} />
        </>
      )}
    </Routes>
  );
};
