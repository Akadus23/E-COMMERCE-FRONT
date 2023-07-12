import React from "react";
import s from "./Tienda.module.css";

export default function Tiendas() {
  return (
    <div className={s.caja6}>
      <div className={s.cajaInterna6}>
        <div className={s.tienda}>
          {/* <div className={s.fondoTienda1}></div> */}
          <img
            src="https://s3.amazonaws.com/cdn.wp.m4ecmx/wp-content/uploads/2021/10/27194242/Compra-Online.jpg"
            alt=""
            className={s.fondoTienda}
          />
          <div className={s.logoTienda}>logo</div>
          <div className={s.nombreTienda}>
            <h2>Nombres Tienda</h2>
            <button className={s.boton}>Ver Tienda</button>
          </div>
        </div>
        <div className={s.tienda}>
          <img
            src="https://img.freepik.com/fotos-premium/fondo-acuarela-colores-romanticos-delicados-textura-acuarela-degradados-pintura-creativa-fondo-claro-acuarela-abstracta_638259-932.jpg"
            alt=""
            className={s.fondoTienda}
          />
          <div className={s.logoTienda}>logo</div>
          <div className={s.nombreTienda}>
            <h2>Nombres Tienda</h2>
            <button className={s.boton}>Ver Tienda</button>
          </div>
        </div>
        <div className={s.tienda}>
          <img
            src="https://cdn.shopify.com/s/files/1/0098/6562/5636/files/Tokio_muebles_de_madera_maciza_collection_1024x.jpg?v=1685564415"
            alt=""
            className={s.fondoTienda}
          />
          <div className={s.logoTienda}>logo</div>
          <div className={s.nombreTienda}>
            <h2>Nombres Tienda</h2>
            <button className={s.boton}>Ver Tienda</button>
          </div>
        </div>
        <div className={s.tienda}>
          <img
            src="https://img.freepik.com/vector-gratis/fondo-azul-degradado_23-2149331406.jpg"
            alt=""
            className={s.fondoTienda}
          />
          <div className={s.logoTienda}>logo</div>
          <div className={s.nombreTienda}>
            <h2>Nombres Tienda</h2>
            <button className={s.boton}>Ver Tienda</button>
          </div>
        </div>
      </div>
    </div>
  );
}
