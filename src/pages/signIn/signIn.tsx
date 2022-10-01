import { Box, useTheme } from '@mui/material';

export const SignIn = () => {
  const theme = useTheme();

  return (
    <form>
      <Box
        component="main"
        width="100vw"
        height="100vh"
        display="flex"
        alignItems="center"
        justifyContent="center"
        sx={{
          backgroundColor: theme.palette.background.default,
          margin: 0,
          padding: 0,
        }}
      >
        asd
      </Box>
    </form>
  );
};
