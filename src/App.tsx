import { BrowserRouter } from 'react-router-dom';
import { AppRoutes } from './routes';
import { AuthProvider } from './shared/contexts';
import { GlobalStyle } from './shared/styles';

export function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <AppRoutes />
        <GlobalStyle />
      </AuthProvider>
    </BrowserRouter>
  );
}
