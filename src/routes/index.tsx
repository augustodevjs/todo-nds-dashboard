import { Routes, Route } from 'react-router-dom';
import { SignIn } from '../pages';

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<SignIn />} />
    </Routes>
  );
};
