import React, { useState } from 'react';
import { TextField, Button, Container, Typography, Grid, useMediaQuery } from '@mui/material';
import { validacionesContacto } from './validaciones';
import contact from '../../Assets/contact.jpg';
import { styled } from '@mui/system';

const Contacto = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState({});

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const validationErrors = validacionesContacto(name, email, message);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      // Lógica para enviar el formulario si no hay errores de validación
      console.log('Name:', name);
      console.log('Email:', email);
      console.log('Message:', message);
      // Resetear los campos del formulario
      setName('');
      setEmail('');
      setMessage('');
      setErrors({});
    }
  };

   const StyledContainer = styled(Container)(({ theme }) => ({
      justifyContent: 'center',
      display: 'flex',
      alignItems: 'center',
      height: '60%',
      width: '40%',
      [theme.breakpoints.down('sm')]: {
        width: '100%',
      },
      mt: 20,
      borderRadius: '3%',
      background: 'linear-gradient(to right, #c5e1a5, #f0f4c3)',
    }));


  return (
    <Grid
      container
      sx={{
        backgroundImage: `url(${contact})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center center',
        mt: -0.9,
        height: '110vh',
        width: '100%',
      }}
    >
      {/* <Container
        sx={{
          justifyContent: 'center',
          display: 'flex',
          alignItems: 'center',
          height: '60%',
          width: isMobile ? '100%' : '40%',
          mt: 20,
          borderRadius: '3%',
          background: 'linear-gradient(to right, #c5e1a5, #f0f4c3)',
        }}
      > */}
        <StyledContainer>

        <form onSubmit={handleSubmit}>
          <Typography
            variant="h4"
            sx={{
              justifyContent: 'center',
              display: 'flex',
              alignItems: 'center',
              mb: 5,
              mt: 1,
            }}
          >
            CONTÁCTENOS
          </Typography>
          <TextField
            label="Nombre"
            variant="outlined"
            value={name}
            onChange={handleNameChange}
            fullWidth
            margin="normal"
            error={errors.name !== undefined}
            helperText={errors.name}
            size="small"
            sx={{ marginBottom: 2 }}
          />
          <TextField
            label="Email"
            variant="outlined"
            value={email}
            onChange={handleEmailChange}
            fullWidth
            margin="normal"
            error={errors.email !== undefined}
            helperText={errors.email}
            size="small"
            sx={{ marginBottom: 2 }}
          />
          <TextField
            label="Mensaje"
            variant="outlined"
            multiline
            rows={4}
            value={message}
            onChange={handleMessageChange}
            fullWidth
            margin="normal"
            error={errors.message !== undefined}
            helperText={errors.message}
            size="small"
            sx={{ marginBottom: 2 }}
          />
          <Button
            item
            xs={12}
            sm={6}
            md={6}
            lg={6}
            variant="contained"
            color="primary"
            type="submit"
            fullWidth
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              width: '22%',
              ml: 1,
              mt: 1,
            }}
          >
            Enviar
          </Button>
        </form>
      </StyledContainer>
    </Grid>
  );
};

export default Contacto;

