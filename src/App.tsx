import { Router } from './routes/Router';
import { GlobalStyle } from './styles/global';
import 'bootstrap/dist/css/bootstrap.min.css';

export function App() {
  return (
    <>
      <GlobalStyle />
      <Router />
    </>
  );
}
