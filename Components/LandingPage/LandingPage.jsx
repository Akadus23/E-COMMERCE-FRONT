import React from "react";
import s from "./LandingPage.module.css";
import Carrusel from "./Carrusel/Carrusel";
import Productos from "./Productos/Productos";
import Baner from "./Baner/Baner";
import Categorias from "./Categorias/Categorias";
import Reseñas from "./Reseñas/Reseña";
import Tiendas from "./Tiendas/Tienda";
import Info from "./Info/Info";

function SwipeableTextMobileStepper() {
  // const theme = useTheme();

  return (
    <div>
      <Carrusel></Carrusel>
      <p className={s.producto}>Productos</p>
      <Productos></Productos>
      <Baner></Baner>
      <p className={s.titulos}>Categoria</p>
      <Categorias></Categorias>
      <Reseñas></Reseñas>
      <p className={s.titulos}>Tiendas</p>
      <Tiendas></Tiendas>
      <p className={s.titulos}>Informacion</p>
      <Info></Info>
    </div>
  );
}

export default SwipeableTextMobileStepper;
