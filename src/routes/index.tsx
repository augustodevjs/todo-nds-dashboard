import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useDrawerContext } from '../shared/contexts';
import { LayoutBase } from '../shared/layouts';

export const AppRoutes = () => {
  const { setDrawerOptions } = useDrawerContext();

  useEffect(() => {
    setDrawerOptions([
      {
        label: 'Página Inicial',
        icon: 'aeeh',
        path: '/pagina-inicial',
      },
    ]);
  }, []);

  return (
    <Routes>
      <Route
        path="/home"
        element={
          <LayoutBase title="oi" toolbars="oi">
            aksdjask
          </LayoutBase>
        }
      />
    </Routes>
  );
};
