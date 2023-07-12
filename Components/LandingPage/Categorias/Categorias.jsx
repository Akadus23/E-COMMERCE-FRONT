import React from "react";
import s from "./Categorias.module.css";

export default function Categorias() {
  return (
    <div className={s.caja4}>
      <div className={s.cajaInterna4}>
        <button className={s.categoria1}>
          <h3>Tecnologia</h3>
        </button>
        <div className={s.categoria1}>
          <h3>Electrodomesticos</h3>
        </div>
        <div className={s.categoria1}>
          <h3>Hogar y Muebles</h3>
        </div>
        <div className={s.categoria1}>
          <h3>Herramientas</h3>
        </div>
        <div className={s.categoria1}>
          <h3>Moda</h3>
        </div>
        <div className={s.categoria1}>
          <h3>Juguetes</h3>
        </div>
        <div className={s.categoria1}>
          <h3>Construccion</h3>
        </div>
        <div className={s.categoria1}>
          <h3>Otros</h3>
        </div>
      </div>
    </div>
  );
}
