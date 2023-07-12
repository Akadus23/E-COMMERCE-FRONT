import React from "react";
import s from "./Info.module.css";

export default function Info() {
  return (
    <div className={s.caja7}>
      <div className={s.cajaInterna}>
        <div className={s.info}>
          <div className={s.icono1}></div>
          <div className={s.data}>
            <h3>Elegí cómo pagar</h3>
            <p>
              Podés pagar libremente con tarjeta, débito, efectivo o hasta 12
              cuotas sin tarjeta.
            </p>
          </div>
        </div>
        <div className={s.separacion}></div>
        <div className={s.info}>
          <div className={s.icono2}></div>
          <div className={s.data}>
            <h3>Envío sin costo adicional</h3>
            <p>
              Solo por estar registrado en All Market tenés envíos gratis en
              miles de productos. Es un beneficio de All Market.
            </p>
          </div>
        </div>
        <div className={s.separacion}></div>
        <div className={s.info}>
          <div className={s.icono3}></div>
          <div className={s.data}>
            <h3>Seguridad, de principio a fin</h3>
            <p>
              ¿No te gusta? ¡Devolvelo! En All Market, no hay nada que no puedas
              hacer, porque estás siempre protegido. Hacé click en Contacto.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
