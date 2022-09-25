import { ThemeProvider } from '@mui/material';
import { BrowserRouter } from 'react-router-dom';
import { AppRoutes } from './routes';
import { DrawerMenu } from './shared/components';
import { DrawerProvider } from './shared/contexts';
import { theme } from './shared/theme/theme';

export function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <DrawerProvider>
          <DrawerMenu>
            <AppRoutes />
          </DrawerMenu>
        </DrawerProvider>
      </BrowserRouter>
    </ThemeProvider>
  );
}
