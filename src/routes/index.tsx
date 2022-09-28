import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useDrawerContext } from '../shared/contexts';
import { Drawer } from '../shared/layouts/MainLayout';

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
      <Route
        path="/home"
        element={
          <h1>
            <Drawer />
          </h1>
        }
      />
    </Routes>
  );
};
