"use client"

import { Grid, Typography, Button, useTheme, useMediaQuery } from '@mui/material';
import Image from 'next/image';

const AboutSpiderMan: React.FC = () => {
  const theme = useTheme();
  const isMobileView = useMediaQuery(theme.breakpoints.down('sm'));

  const aboutSpiderMan = "Peter Parker's personal life is as complex as his superhero adventures. He grapples with the responsibility of balancing his crime-fighting duties with his personal relationships and struggles to make ends meet as a freelance photographer for the Daily Bugle newspaper. His romantic entanglements, particularly with characters like Mary Jane Watson and Gwen Stacy, have been central to many of his storylines."

  return (
    <Grid
      container
      sx={{
        padding: 4, // Add padding around the grid
        backgroundColor: 'white',
      }}
    >
      <Grid
        item
        xs={12}
        md={6}
        sx={{
          display: 'flex',
          flexDirection: isMobileView ? 'column' : 'row',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'black',
          paddingRight: 4, // Add padding to the left grid
        }}
      >
        <Image
          src="/images/spiderman.webp"
          alt="Bear"
          width={300}
          height={300}
          style={{
            width: '100%',
            height: 'auto',
            marginBottom: isMobileView ? theme.spacing(4) : 0,
            borderRadius: 16,
          }}
        />
      </Grid>
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
          Spider Man
        </Typography>
        <Typography variant="body1" sx={{ mb: 4 }}>
          {aboutSpiderMan}
        </Typography>
        <Button
          variant="contained"
          color="primary"
          sx={{
            alignSelf: 'flex-start', // Left align the button
            whiteSpace: 'nowrap', // Prevent the button from wrapping
          }}
        >
          Learn More
        </Button>
      </Grid>
    </Grid>
  );
};

export default AboutSpiderMan;