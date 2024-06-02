"use client"
import { Grid, Typography, Button } from '@mui/material';

const HeroBanner: React.FC = () => {

  const aboutSuperHeros = "Superheroes, as depicted in comic books, movies, and other forms of media, are fictional characters created for entertainment purposes. While they often possess extraordinary abilities and embark on heroic adventures, they do not exist in reality. However, the themes and values embodied by superheroes, such as bravery, justice, and selflessness, can inspire people in real life to strive for similar ideals and make positive contributions to their communities.";

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
          Super Heros
        </Typography>
        <Typography variant="h2" sx={{ mb: 2 }}>
          Are they real?
        </Typography>
        <Typography variant="body1" sx={{ mb: 4 }}>
          {aboutSuperHeros}
        </Typography>
        <Button
          variant="contained"
          color="primary"
          sx={{
            alignSelf: 'flex-start', // Left align the button
            whiteSpace: 'nowrap', // Prevent the button from wrapping
          }}
        >
          Read More
        </Button>
      </Grid>
    </Grid>
  );
};

export default HeroBanner;