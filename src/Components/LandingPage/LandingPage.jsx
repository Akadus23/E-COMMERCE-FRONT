import React, { useState, useEffect } from "react";
import s from "./LandingPage.module.css";
import Carrusel from "./Carrusel/Carrusel";
import Productos from "./Productos/Productos";
import Baner from "./Baner/Baner";
import Categorias from "./Categorias/Categorias";
import Reseñas from "./Reseñas/Reseña";
// import Tiendas from "./Tiendas/Tienda";
import Info from "./Info/Info";
import { Dialog, Avatar, Backdrop, Typography, styled, } from '@mui/material';


function SwipeableTextMobileStepper() {
  // const theme = useTheme();
  const [open, setOpen] = useState(true);

  useEffect(() => {
    // Cerrar el modal después de 5 segundos
    const timer = setTimeout(() => {
      setOpen(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  const CircularDialog = styled(Dialog)({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '10%',
  });

  return (
    <div>
     {/* <Backdrop open={open} style={{ zIndex: 999, color: '#fff', opacity: 0.5 }} />
     <CircularDialog open={open} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
  <Avatar sx={{ width: 400, height: 400, ml: "50px" }} src="https://images.pexels.com/photos/6868618/pexels-photo-6868618.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Imagen de perfil" />
  <Typography variant="h1" align="center" sx={{ marginTop: 2 }}>
    ¡Bienvenid@!
  </Typography>
</CircularDialog> */}

      <Carrusel></Carrusel>
      <p className={s.producto}>Productos</p>
      <Productos></Productos>
      <Baner></Baner>
      <p className={s.titulos}>Categoria</p>
      <Categorias></Categorias>
      <Reseñas></Reseñas>

      <p className={s.titulos}>Informacion</p>
      <Info></Info>
    </div>
  );
}

export default SwipeableTextMobileStepper;
