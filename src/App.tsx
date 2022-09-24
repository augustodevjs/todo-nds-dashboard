import { BrowserRouter } from 'react-router-dom';
import { AppRoutes } from './routes';
import { DrawerMenu } from './shared/components';
import { DrawerProvider } from './shared/contexts';

export function App() {
  return (
    <BrowserRouter>
      <DrawerProvider>
        <DrawerMenu>
          <AppRoutes />
        </DrawerMenu>
      </DrawerProvider>
    </BrowserRouter>
  );
}
