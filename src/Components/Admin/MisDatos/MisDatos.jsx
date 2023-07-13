import React from "react";
import s from "./MisDatos.module.css";

// ########## Aqui sera el apartado de Datos del Usuario ##########
export default function MisDatos() {
  return (
    <div className={s.cajaInterna2}>
      <h1>Datos de cuenta</h1>
      <div className={s.datosP}>
        <div className={s.dato1a}>
          <h2>Nombre y Apellido </h2>

          <p>Nombre Completo</p>
        </div>
        <div className={s.dato1a}>
          <h2>Usuario</h2>
          <p>Nombre Apellido</p>
        </div>

        <div className={s.dato1a}>
          <h2>Id</h2>
          <p>27</p>
        </div>

        <div className={s.dato1a}>
          <h2>Rol</h2>
          <p>Administrador</p>
        </div>
        <div className={s.dato1a}>
          <h2>Estado</h2>
          <p>Habilitado</p>
        </div>
      </div>
    </div>
  );
}
