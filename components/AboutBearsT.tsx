"use client";

import { Grid, Typography, Button, useTheme, useMediaQuery } from '@mui/material';
import Image from 'next/image';

const AboutBearsT: React.FC = () => {
  const theme = useTheme();
  const isMobileView = useMediaQuery(theme.breakpoints.down('sm'));

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
          About Bears
        </Typography>
        <Typography variant="body1" sx={{ mb: 4 }}>
          There are 3 types of bears in the world.
        </Typography>
        <Button
          variant="contained"
          color="primary"
          sx={{
            alignSelf: 'flex-start',
            whiteSpace: 'nowrap',
          }}
        >
          Click Me
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
          src="/images/bear.png"
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

export default AboutBearsT;