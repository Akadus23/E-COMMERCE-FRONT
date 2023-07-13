import React from "react";
import s from "./Productos.module.css";

export default function Productos() {
  return (
    <div className={s.caja2}>
      <div className={s.cajaInterna2}>
        <div className={s.productos}>
          <div className={s.cajaImagen}>
            <img
              src="https://http2.mlstatic.com/D_NQ_NP_938868-MLA50785052505_072022-O.webp"
              alt=""
              className={s.fondoProductos}
            />
          </div>
          <div className={s.titulo}>Zapatos</div>
          <div className={s.precio}>
            <h3>OFERTA!</h3>
          </div>
         
        </div>
        <div className={s.productos}>
          <div className={s.cajaImagen}>
            <img
              src="https://tienda.claro.com.ar/staticContent/Claro/images/catalog/productos/646x1000/7005110.webp"
              alt=""
              className={s.fondoProductos}
            />
          </div>
          <div className={s.titulo}>Computadores</div>
          <div className={s.precio}>
            <h3>OFERTA!</h3>
          </div>
        
        </div>
        <div className={s.productos}>
          <div className={s.cajaImagen}>
            <img
              src="https://cdnx.jumpseller.com/casa-contigo/image/22094078/resize/640/640?1645028888"
              alt=""
              className={s.fondoProductos}
            />
          </div>
          <div className={s.titulo}>Almohadas</div>
          <div className={s.precio}>
            <h3>OFERTA!</h3>
          </div>
          
        </div>
        <div className={s.productos}>
          <div className={s.cajaImagen}>
            <img
              src="https://bulonfer.vtexassets.com/arquivos/ids/213334-500-auto?v=1775500875&width=500&height=auto&aspect=true"
              alt=""
              className={s.fondoProductos}
            />
          </div>
          <div className={s.titulo}>Herramientas</div>
          <div className={s.precio}>
            <h3>OFERTA!</h3>
          </div>
      
        </div>
        
      </div>
    </div>
  );
}
