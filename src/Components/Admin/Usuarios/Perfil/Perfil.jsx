import { useDispatch, useSelector } from "react-redux";
import { clearUsuarioDetail, usuarioId } from "../../../../Redux/actions";
import s from "./Perfil.module.css";
import { Link, useParams } from "react-router-dom";
import { useEffect } from "react";

export default function Perfil() {
  const detalleUser = useSelector((state) => state.usuarioDetail);
  let { id } = useParams();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(usuarioId(id));
  }, []);

  const { name, picture, rol, isBan, nickname } = detalleUser;

  const estado = isBan === false ? "Habilitado" : "Desabilitado";
  const elRol = rol === 1 ? "Usuario" : "Administrador";

  return (
    <div className={s.fondo}>
      <div className={s.cajaInterna2}>
        <div className={s.datosC}>
          <div className={s.dato1}>
            <img src={picture} alt="" className={s.avatar} />
            <p>{name}</p>
          </div>
        </div>
        <h1>Datos de cuenta</h1>
        <div className={s.datosP}>
          <div className={s.dato1a}>
            <h2>Usuario</h2>

            <p>{nickname}</p>
          </div>
          <div className={s.dato1a}>
            <h2>Id</h2>
            <p>{id}</p>
          </div>
          <div className={s.dato1a}>
            <h2>Rol</h2>
            <p>{elRol}</p>
          </div>

          <div className={s.dato1a}>
            <h2>Estado</h2>
            <p>{estado}</p>
          </div>
        </div>
        <button className={s.cerrarCuenta}>
          <Link to="/admin/usuarios" style={{ textDecoration: "none" }}>
            <h1 style={{ padding: "20px" }}>Volver</h1>
          </Link>
        </button>
      </div>
    </div>
  );
}
