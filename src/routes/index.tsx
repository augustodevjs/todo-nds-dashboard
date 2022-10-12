import { Route, Routes } from 'react-router-dom';
import { SignIn, SignUp } from '../pages';

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<SignIn />} />
      <Route path="/register" element={<SignUp />} />
    </Routes>
  );
};
