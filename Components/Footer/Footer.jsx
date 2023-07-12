import * as React from 'react';
import { Facebook, Instagram, LinkedIn, Home, Info, AlternateEmail } from '@mui/icons-material';
import { Grid, Box, BottomNavigation, BottomNavigationAction, Link, } from '@mui/material';

const preventDefault = (event) => event.preventDefault();

export default function Footer() {
  const [value, setValue] = React.useState(0);

  return (
    <Box
    sx={{
      bottom: 78,
      left: 0,
      width: '100%',
      height: 150,
      backgroundColor: '#ff8a65',
      // Propiedades responsivas
      '@media (max-width: 600px)': {
        height: 100,
      },
    }}
    >
      <Grid container justifyContent="center" alignItems="center" height="100%" >
        <BottomNavigation
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
          sx={{
            backgroundColor: '#ff8a65',
          }}
        >
          <BottomNavigationAction
            label="Home"
            icon={<Home />}
            value="home"
            component={Link}
            href="/"
            sx={{ mx: 1, }}
          />
          <BottomNavigationAction
            label="About Us"
            icon={<Info />}
            value="about"
            component={Link}
            href="/aboutus"
            sx={{ mx: 1, }}
          />
          <BottomNavigationAction
            label="Contacto"
            icon={<AlternateEmail />}
            value="contacto"
            component={Link}
            href="/contacto"
            sx={{ mx: 1, }}
          />
        </BottomNavigation>
      </Grid>

      <Grid
        container
        bgcolor="#ff6e40"
        justifyContent="center"
        bottom={0}
        left={0}
      >
        <Box item sx={{ mx: 1, }}>
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
            <LinkedIn
              sx={{
                p: 2,
                mb: 1,
                color: '#eeeeee',
                fontSize: '40px',
              }}
            />
          </a>
        </Box>
        <Box item sx={{ mx: 1, }}>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <Instagram
              sx={{
                p: 2,
                mb: 1,
                color: '#eeeeee',
                fontSize: '40px',
              }}
            />
          </a>
        </Box>
        <Box item sx={{ mx: 1, }}>
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            <Facebook
              sx={{
                p: 2,
                mb: 1,
                color: '#eeeeee',
                fontSize: '40px',
              }}
            />
          </a>
        </Box>
      </Grid>
    </Box>
  );
}

