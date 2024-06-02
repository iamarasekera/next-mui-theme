"use client";

import { Grid, Typography, Button, useTheme, useMediaQuery } from '@mui/material';
import Image from 'next/image';

const AboutIronMan: React.FC = () => {
  const theme = useTheme();
  const isMobileView = useMediaQuery(theme.breakpoints.down('sm'));

  const aboutIronMan = "Tony Stark, much like Peter Parker, faces a whirlwind of personal and superheroic challenges. Balancing the demands of being Iron Man with his personal life proves to be a constant struggle. Stark juggles his responsibilities as a billionaire industrialist, philanthropist, and superhero while navigating complex relationships. His romantic entanglements, notably with Pepper Potts, add layers of depth to his character and have often been focal points of his storylines. Additionally, Stark's inner demons, stemming from his past as a weapons manufacturer and his struggles with alcoholism, contribute to the complexity of his character and the challenges he faces both in and out of the armor."

  return (
    <Grid container sx={{ padding: 4, backgroundColor: 'white' }}>
      <Grid
        item
        xs={12}
        md={6}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          color: 'black',
          paddingRight: isMobileView ? 0 : 4,
        }}
      >
        <Typography variant="h1" sx={{ fontWeight: 'bold', mb: 2 }}>
          Iron Man
        </Typography>
        <Typography variant="body1" sx={{ mb: 4 }}>
          {aboutIronMan}
        </Typography>
        <Button
          variant="contained"
          color="primary"
          sx={{
            alignSelf: 'flex-start',
            whiteSpace: 'nowrap',
          }}
        >
          Learn More
        </Button>
      </Grid>

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
          paddingLeft: isMobileView ? 0 : 4,
        }}
      >
        <Image
          src="/images/ironman.png"
          alt="Bear"
          width={300}
          height={300}
          style={{
            width: '100%',
            height: 'auto',
            marginTop: isMobileView ? theme.spacing(4) : 0,
            borderRadius: 16,
          }}
        />
      </Grid>
    </Grid>
  );
};

export default AboutIronMan;