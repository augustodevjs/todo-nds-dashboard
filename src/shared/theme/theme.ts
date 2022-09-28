import { createTheme } from '@mui/material';

export const Theme = createTheme({
  palette: {
    primary: {
      light: '#69c0ff',
      main: '#1890ff',
      dark: '#096dd9',
      '50': '#e6f7ff',
      '100': '#bae7ff',
      '200': '#91d5ff',
      '400': '#40a9ff',
      '700': '#0050b3',
      '800': '#003a8c',
      '900': '#002766',
    },
    secondary: {
      light: '#d9d9d9',
      main: '#8c8c8c',
      dark: '#262626',
      '50': '#fafafa',
      '100': '#f5f5f5',
      '200': '#f0f0f0',
      '400': '#bfbfbf',
      '600': '#595959',
      '800': '#141414',
      A100: '#ffffff',
      A200: '#434343',
      A400: '#1f1f1f',
      A700: '#000000',
    },
    error: {
      '50': '#fff1f0',
      light: '#ff7875',
      main: '#f5222d',
      dark: '#a8071a',
      '900': '#5c0011',
    },
    warning: {
      '50': '#fffbe6',
      light: '#ffd666',
      main: '#faad14',
      dark: '#ad6800',
      '900': '#613400',
    },
    success: {
      '50': '#f6ffed',
      light: '#95de64',
      main: '#52c41a',
      dark: '#237804',
      '900': '#092b00',
    },

    background: {
      paper: '#434343',
      default: '#1f1f1f',
    },
  },
  typography: {
    allVariants: {
      color: '#fff',
    },
  },
});
