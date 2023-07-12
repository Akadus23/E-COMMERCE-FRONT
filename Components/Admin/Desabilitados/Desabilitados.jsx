import React, { useRef } from "react";
import s from "./Desabilitados.module.css";
import { useSelector } from "react-redux/es/hooks/useSelector";

// ######### Aqui se renderisaran los usuarios ##########
export default function UsuariosDes() {
  const losUsuarios = useSelector((state) => state.usuariosDesabilitados);

  const containerRef = useRef(null);
  const handleScroll = (e) => {
    const container = containerRef.current;
    container.scrollTop += e.deltaY;
  };

  return (
    <div className={s.fondo} onWheel={handleScroll} ref={containerRef}>
      <p>Usuarios Desabilitados</p>
      <div className={s.barra}>
        <p>Imagen</p>

        <p>Usuario</p>
        <p>Perfil</p>
        <p>Rol</p>
        <p>Acción</p>
      </div>
      {losUsuarios.map((e) => (
        <div className={s.usuarios}>
          <div className={s.cajaImagen}>
            <img src={e.img} alt="" className={s.imagen} />
          </div>
          <div className={s.username}>{e.username}</div>

          <div className={s.ver}>
            <button>Ver</button>
          </div>
          <div className={s.rol}>{e.rol}</div>
          <div className={s.accion}>
            <button>Habilitar</button>
          </div>
        </div>
      ))}
    </div>
  );
}
