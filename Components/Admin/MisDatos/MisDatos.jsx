import React from "react";
import s from "./MisDatos.module.css";

// ########## Aqui sera el apartado de Datos del Usuario ##########
export default function MisDatos() {
  return (
    <div className={s.cajaInterna2}>
      <h1>Datos de cuenta</h1>
      <div className={s.datosC}>
        <div className={s.dato1a}>
          <h2>
            Usuario
            <button style={{ color: "red", marginLeft: "30px" }}>editar</button>
          </h2>
          <p>Nombre Apellido</p>
        </div>
        <div className={s.dato1a}>
          <h2>
            Email
            <button style={{ color: "red", marginLeft: "30px" }}>editar</button>
          </h2>
          <p>nombre123@gmail.com</p>
        </div>
      </div>
      <h1>Datos personales</h1>
      <div className={s.datosP}>
        <div className={s.dato1a}>
          <h2>
            Nombre y Apellido{" "}
            <button style={{ color: "red", marginLeft: "30px" }}>editar</button>
          </h2>

          <p>Nombre Completo</p>
        </div>
        <div className={s.dato1a}>
          <h2>
            Edad
            <button style={{ color: "red", marginLeft: "30px" }}>editar</button>
          </h2>
          <p>27</p>
        </div>
        <div className={s.dato1a}>
          <h2>
            Direccion
            <button style={{ color: "red", marginLeft: "30px" }}>editar</button>
          </h2>
          <p>callefalsa 123</p>
        </div>
        <div className={s.dato1a}>
          <h2>
            Telefono
            <button style={{ color: "red", marginLeft: "30px" }}>editar</button>
          </h2>
          <p>123456789</p>
        </div>
        <div className={s.dato1a}>
          <h2>
            Contraseña
            <button style={{ color: "red", marginLeft: "30px" }}>editar</button>
          </h2>
          <p>***********</p>
        </div>
      </div>
    </div>
  );
}
