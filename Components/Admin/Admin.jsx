import React from "react";
import s from "./Admin.module.css";
import { Link, Outlet } from "react-router-dom";

//####################################

export default function Admin() {
  return (
    <div className={s.fondo}>
      <div className={s.navBar}>
        <div className={s.caja1}>
          <img
            src="https://ionicframework.com/docs/img/demos/avatar.svg"
            alt=""
            className={s.imagen}
          />
          <h1>Nombre Apellido</h1>
          <p>Rol: Administrador</p>
        </div>
        <div className={s.caja2}>
          <Link
            to="/admin/publicaciones"
            style={{
              color: "white",
              textDecoration: "none",
              marginBottom: "20px",
            }}
          >
            PUBLICACIONES
          </Link>
          <Link
            to="/admin/ventas"
            style={{
              color: "white",
              textDecoration: "none",
              marginBottom: "20px",
            }}
          >
            VENTAS
          </Link>
          <Link
            to="/admin/usuarios"
            style={{
              color: "white",
              textDecoration: "none",
              marginBottom: "20px",
            }}
          >
            USUARIOS HAB.
          </Link>
          <Link
            to="/admin/baneados"
            style={{
              color: "white",
              textDecoration: "none",
              marginBottom: "20px",
            }}
          >
            USUARIOS DES.
          </Link>
          <Link
            to="/admin/mis-datos"
            style={{
              color: "white",
              textDecoration: "none",
              marginBottom: "20px",
            }}
          >
            MIS DATOS
          </Link>
        </div>
      </div>
      <div className={s.content}>
        <Outlet />
      </div>
    </div>
  );
}
