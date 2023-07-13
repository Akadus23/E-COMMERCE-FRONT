import React from "react";
import s from "./MisDatos.module.css";
import { useAuth0 } from "@auth0/auth0-react";
import axios from 'axios'

// ########## Aqui sera el apartado de Datos del Usuario ##########
export default function MisDatos() {

  const {user} = useAuth0()
  //const [idUsuario, setIdUsuario] = (0)
  var rol = ""
  async function traerData() {
    try{
  const resUsuario = await axios.get(`/usuarios/${user.sub}`)
 // setIdUsuario(resUsuario.data.id)
  if(resUsuario.data.rol === true ) rol = "Administrador"
  if(resUsuario.data.rol === false ) rol = "usuario"
}catch(err){
  alert(err.message)
}
}


  return (
    <div className={s.cajaInterna2}>
      <h1>Datos de cuenta</h1>
      <div className={s.datosP}>
        <div className={s.dato1a}>
          <h2>Nombre y Apellido </h2>

          <p>{user.name}</p>
        </div>
        <div className={s.dato1a}>
          <h2>Usuario</h2>
          <p>{user.email}</p>
        </div>

        <div className={s.dato1a}>
          <h2>Id</h2>
          <p>5</p>
        </div>

        <div className={s.dato1a}>
          <h2>Rol</h2>
          <p>{rol}</p>
        </div>
     
      </div>
    </div>
  );
}
