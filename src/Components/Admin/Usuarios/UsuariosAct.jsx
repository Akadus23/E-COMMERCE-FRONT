import React, { useEffect } from "react";
import s from "./UsuariosAct.module.css";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
//import { setUsuarioDetail } from "../../../Redux/actions";
import { Button, Typography, Box, Pagination } from "@mui/material";
import { fetchUsuarios } from "../../../Redux/actions";

// ######################################

export default function UsuariosAct() {
  const dispatch = useDispatch();

  const usuarios = useSelector((state) => state.usuarios);
  const totalPages = useSelector((state) => state.totalPages);
  //const [reloadPage, setReloadPage] = React.useState(false);

  // const disableUserHandler = (userId) => {
  //   console.log(userId);
  //   dispatch(disableUser(userId));
  // };

  useEffect(() => {
    dispatch(fetchUsuarios(1, 10));
  }, [dispatch]);

  return (
    <Box className={s.fondo}>
      <Box className={s.cabezera}>
        <Typography variant="h6">Usuarios Habilitados</Typography>
        {/* <Link to={"/admin/crearUsuariosAdmin"}>
          <Button
            style={{
              borderRadius: "5px",
              backgroundColor: "#795548",
              color: "white",
            }}
          >
            Crear nuevo
          </Button>
        </Link> */}
      </Box>
      <Box className={s.barra}>
        <Typography className={s.barraimagen}>Imagen</Typography>
        <Typography className={s.barrausername}>Usuario</Typography>
        <Typography className={s.barrarol}>Rol</Typography>
        <Typography className={s.barraaccion}>Acción</Typography>
        <Typography className={s.barraaccion}>Perfil</Typography>
      </Box>
      <Box className={s.cajaUsuarios}>
        {usuarios.map((usuario) => (
          <Box className={s.usuarios} key={usuario.id}>
            <Box className={s.cajaImagen}>
              <img src={usuario.picture} alt="" className={s.imagen} />
            </Box>
            <Typography className={s.username}>{usuario.name}</Typography>
            <Typography className={s.rol}>
              {usuario.rol === 1 ? "Usuario" : "Administrador"}
            </Typography>
            <Typography className={s.rol}>
              {usuario.isBan === false ? "Habilitado" : "Deshabilitado"}
            </Typography>
            <Box className={s.accion}>
              {/* <Button onClick={() => disableUserHandler(usuario.id)}>
                cambiar estado
              </Button> */}
              <Link
                to={`/admin/perfilUsuario/${usuario.id}`}
                className={s.accion}
                style={{ textDecoration: "none" }}
              >
                <Button>ver</Button>
              </Link>
              <script src="script.js"></script>
            </Box>
          </Box>
        ))}
      </Box>
      <Box className={s.pagination}></Box>
    </Box>
  );
}
