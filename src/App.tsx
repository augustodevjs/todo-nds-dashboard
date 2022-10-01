import { CssBaseline, ThemeProvider } from '@mui/material';
import { BrowserRouter } from 'react-router-dom';
import { AppRoutes } from './routes';
import { DrawerProvider } from './shared/contexts';
import { Theme } from './shared/theme';

export function App() {
  return (
    <ThemeProvider theme={Theme}>
      <BrowserRouter>
        <CssBaseline />
        <DrawerProvider>
          <AppRoutes />
        </DrawerProvider>
      </BrowserRouter>
    </ThemeProvider>
  );
}
