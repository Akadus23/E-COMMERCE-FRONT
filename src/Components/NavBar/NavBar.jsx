import React from 'react';
import { NavLink } from 'react-router-dom';
import SearchBar from './SearchBar';
import { Box, Typography } from '@mui/material';

export default function NavBar() {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-evenly',
        backgroundColor: 'rgb(248, 227, 227)',
        height: '80px',
        padding: '0 100px',
        '@media (max-width: 960px)': {
          padding: '0 50px',
        },
        '@media (max-width: 600px)': {
          flexDirection: 'column',
          alignItems: 'center',
          height: 'auto',
          padding: '10px',
        },
      }}
    >
      <Box sx={{ ml: '3%', mt: 3 }}>
        <NavLink to="/home" exact activeClassName="activeLink">
          <Typography
            variant="h6"
            sx={{
              position: 'static',
              '@media (max-width: 600px)': {
                fontSize: '14px',
              },
            }}
          >
            HOME
          </Typography>
        </NavLink>
      </Box>
      <SearchBar />
      <Box sx={{ mr: '3%', mt: 2 }}>
        <NavLink to="/formProducto" exact activeClassName="activeLink">
          <Typography
            variant="h6"
            sx={{
              '@media (max-width: 600px)': {
                fontSize: '14px',
              },
            }}
          >
            Crear Producto
          </Typography>
        </NavLink>
      </Box>
    </Box>
  );
}
