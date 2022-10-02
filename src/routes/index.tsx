import { Routes, Route } from 'react-router-dom';
import { SignIn, SignUp } from '../pages';
import { SideBar } from '../shared/layouts';

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<SignIn />} />
      <Route path="/register" element={<SignUp />} />
      <Route path="/sidebar" element={<SideBar />} />
    </Routes>
  );
};
