import Modal from 'react-modal';
import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from './shared/contexts';
import { GlobalStyle } from './shared/styles';
import { AppRoutes } from './routes';

Modal.setAppElement('#root');

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
