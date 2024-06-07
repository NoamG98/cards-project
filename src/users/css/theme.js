
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#2e7d32', // Amazon rainforest green
    },
    secondary: {
      main: '#ffcc80', // Complementary color
    },
    background: {
      default: '#e8f5e9', // Light green background
    },
  },
  typography: {
    fontFamily: 'Arial, sans-serif',
  },
});

export default theme;
