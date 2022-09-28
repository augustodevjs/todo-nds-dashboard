import { ThemeProvider } from '@mui/material';
import { BrowserRouter } from 'react-router-dom';
import { AppRoutes } from './routes';
import { DrawerProvider } from './shared/contexts';
import { Theme } from './shared/theme';

export function App() {
  return (
    <ThemeProvider theme={Theme}>
      <BrowserRouter>
        <DrawerProvider>
          <AppRoutes />
        </DrawerProvider>
      </BrowserRouter>
    </ThemeProvider>
  );
}
