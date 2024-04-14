"use client"
import { Grid, Typography, Button } from '@mui/material';
//New comment
const HeroBanner: React.FC = () => {
  return (
    <Grid
      container
      sx={{
        backgroundImage: `url('/images/banner-bg.webp')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '80vh',
        backgroundColor: (theme) => theme.palette.mode === 'dark' ? 'red' : 'inherit',
        padding: 4, // Add padding around the grid
      }}
    >
      <Grid
        item
        xs={12}
        md={6}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          color: 'black',
        }}
      >
        <Typography variant="h1" sx={{ fontWeight: 'bold', mb: 2 }}>
          Hero Banner
        </Typography>
        <Typography variant="h2" sx={{ mb: 2 }}>
          Subtitle
        </Typography>
        <Typography variant="body1" sx={{ mb: 4 }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut risus in
          augue luctus venenatis.
        </Typography>
        <Button
          variant="contained"
          color="primary"
          sx={{
            alignSelf: 'flex-start', // Left align the button
            whiteSpace: 'nowrap', // Prevent the button from wrapping
          }}
        >
          Click Me
        </Button>
      </Grid>
    </Grid>
  );
};

export default HeroBanner;