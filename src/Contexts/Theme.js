import { createTheme, ThemeProvider } from '@mui/material/styles';
import { styled } from '@mui/system';

const theme = createTheme({
  typography: {
    fontFamily: ['IBM', 'Ubuntu', 'Roboto', 'sans-serif'].join(','),
  },
});

function ThemeProviderWrapper({ children }) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
export { ThemeProviderWrapper, theme, styled };