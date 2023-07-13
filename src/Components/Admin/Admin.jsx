import React from "react";
import s from "./Admin.module.css";
import { Link, Outlet } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

//####################################

export default function Admin() {

  const { isAuthenticated, loginWithRedirect, user } = useAuth0();
  if(true){
    return (
      <div className={s.fondo}>
      <div className={s.navBar}>
        <div className={s.caja1}>
          <img
            src= {user.picture}
            alt="https://ionicframework.com/docs/img/demos/avatar.svg"
            className={s.imagen}
          />
          <h1>{user.name}</h1>
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
    )
  }
  
  loginWithRedirect() 
   
  
}
