import React, { useState, useEffect } from "react";
import s from "./LandingPage.module.css";
import Carrusel from "./Carrusel/Carrusel";
import Productos from "./Productos/Productos";
import Baner from "./Baner/Baner";
import Categorias from "./Categorias/Categorias";
import Reseñas from "./Reseñas/Reseña";
import Tiendas from "./Tiendas/Tienda";
import Info from "./Info/Info";
import { Dialog, CircularProgress, Backdrop } from '@mui/core';


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

  return (
    <div>
      <Backdrop open={open} style={{ zIndex: 999, color: '#fff', opacity: 0.5 }} />
      <Dialog open={open} maxWidth="xs">
        <CircularProgress size={80} />
      </Dialog>
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
