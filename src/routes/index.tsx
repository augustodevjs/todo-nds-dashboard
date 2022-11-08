import { Routes, Route } from 'react-router-dom';
import { Tasks, Login, Register, Lists } from '../pages';
import { useAuth } from '../shared/hooks/useAuth';

export const AppRoutes = () => {
  const { isAuthenticated } = useAuth();

  return (
    <Routes>
      {isAuthenticated ? (
        <>
          <Route path="/tasks" element={<Tasks />} />
          <Route path="/lists" element={<Lists />} />
        </>
      ) : (
        <>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </>
      )}
    </Routes>
  );
};
