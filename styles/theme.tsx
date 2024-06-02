import { createTheme } from '@mui/material/styles';

// Define your custom theme
const theme = createTheme({
  typography: {
    h1: {
      fontFamily: 'Merriweather, serif', // Change to Merriweather
      fontWeight: 700,
      fontSize: '5rem',
      lineHeight: 1.2,
    },
    body1: {
      fontFamily: 'Montserrat, sans-serif', // Change to Montserrat
      fontWeight: 400,
      fontSize: '1rem',
      lineHeight: 1.5,
    },
    // Add more typography variants as needed
  },
  palette: {
    // Define color palette here
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#dc004e',
    },
    background: {
      default: '#f5f5f5',
    },
    // Add more color options as needed
  },
  // Other theme configurations
});

export default theme;