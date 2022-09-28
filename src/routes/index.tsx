import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useDrawerContext } from '../shared/contexts';

export const AppRoutes = () => {
  const { setDrawerOptions } = useDrawerContext();

  useEffect(() => {
    setDrawerOptions([
      {
        label: 'Tarefas',
        icon: 'aeeh',
        path: '/home',
      },
      {
        label: 'Listas',
        icon: 'aeeh',
        path: '/home2',
      },
    ]);
  }, []);

  return (
    <Routes>
      <Route path="/home" element={<h1>1209310</h1>} />
    </Routes>
  );
};
