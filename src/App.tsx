import Modal from 'react-modal';
import { BrowserRouter } from 'react-router-dom';
import { AuthProvider, OpenModalProvider } from './shared/contexts';
import { GlobalStyle } from './shared/styles';
import { AppRoutes } from './routes';

Modal.setAppElement('#root');

export function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <OpenModalProvider>
          <AppRoutes />
          <GlobalStyle />
        </OpenModalProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}
