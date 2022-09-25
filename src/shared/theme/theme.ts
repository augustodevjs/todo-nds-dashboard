import { createTheme } from '@mui/material';

export const theme = createTheme({
  palette: {
    primary: {
      main: '#25294c',
      contrastText: '#333333',
    },
    secondary: {
      main: '#202342',
      contrastText: '#E9ECEF',
    },
    background: {
      default: '#E9ECEF',
    },
    success: {
      main: '#198754',
    },
    warning: {
      main: '#FFC107',
    },
    error: {
      main: '#DC3545',
    },
    info: {
      main: '#0D6EFD',
    },
  },
});
