import { createTheme } from '@mui/material/styles';

// Define your custom theme
const theme = createTheme({
  typography: {
    h1: {
      fontFamily: 'Merriweather, serif',
      fontWeight: 700,
      lineHeight: 1.2,
    },
    body1: {
      fontFamily: 'Montserrat, sans-serif',
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


// Update the h1 typography variant with breakpoints
/*Mobile screens: 2rem
  Tablet screens: 3rem
  Web view: 5rem*/

theme.typography.h1 = {
  ...theme.typography.h1,
  [theme.breakpoints.down('sm')]: {
    fontSize: '2rem',
  },
  [theme.breakpoints.up('sm')]: {
    fontSize: '3rem',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '5rem',
  },
};

// Update the body1 typography variant with breakpoints
theme.typography.body1 = {
  ...theme.typography.body1,
  [theme.breakpoints.down('sm')]: {
    fontSize: '0.875rem',
  },
};

export default theme;