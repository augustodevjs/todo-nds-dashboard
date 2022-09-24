import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Login } from '../pages/authentication/Login';
import { Signup } from '../pages/authentication/Signup';
import { Lists } from '../pages/dashboard/Lists';
import { Tasks } from '../pages/dashboard/Tasks';

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Tasks />} />
        <Route path="/lists" element={<Lists />} />

        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
}
