import React, { useEffect } from "react";
import s from "./UsuariosAct.module.css";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
//import { setUsuarioDetail } from "../../../Redux/actions";
import { Button, Typography, Box, Pagination, } from "@mui/material";
import { getAllUsuarios, fetchUsuarios } from "../../../Redux/actions";

// ######################################

export default function UsuariosAct() {
  //const losUsuarios = useSelector((state) => state.usuariosHabilidatos);
  // const paginas = useSelector((state) => state.pagina);
  // function handleChangePagina(event, value) {
    //   dispatch(getAllUsuarios(value, 5));
    // }
    // const handlePagination = (pageNumber) => {
    //   dispatch(fetchUsuarios(pageNumber, 4));
    // };

  const deshabilitarBtn = document.getElementById('deshabilitarBtn');

    // Verificar si el elemento existe antes de agregar el evento
if (deshabilitarBtn) {
  deshabilitarBtn.addEventListener('click', () => {
    // Solicitar confirmación al usuario antes de deshabilitar
    if (window.confirm('¿Estás seguro de que deseas deshabilitar al usuario?')) {
      // Llamada a la API o al servidor para deshabilitar al usuario
      deshabilitarUsuario();
    }
  });
}


    // Función para deshabilitar al usuario (a reemplazar con tu propia lógica)
    function deshabilitarUsuario() {
      // ID del usuario a deshabilitar (a reemplazar con el valor adecuado)
      const usuarioId = '123';

      // URL de la API o servidor (reemplaza '123' con el ID del usuario correspondiente)
      const url = `https://commerce-back-2025.up.railway.app/usuarios/${usuarioId}/isban`;
      const local = `https://localhost:3000/usuarios/${usuarioId}/isban`
      // Opciones de la solicitud
      const options = {
        method: 'POST', // O el método adecuado para deshabilitar al usuario
        headers: {
          'Content-Type': 'application/json', // O el tipo de contenido adecuado
        },
      };

      // Realizar la solicitud
  fetch(url, options)
  .then(response => {
    if (!response.ok) {
      throw new Error('Error en la solicitud');
    }
    return response.json();
  })
  .then(data => {
    // Manejar la respuesta del servidor
    console.log(data);
    alert('Usuario deshabilitado correctamente');
  })
  .catch(error => {
    // Manejar errores en la solicitud
    console.error('Error:', error);
    alert('Error al deshabilitar al usuario');
  });
      }

  const dispatch = useDispatch();

  const usuarios = useSelector((state) => state.usuarios);
  const totalPages = useSelector((state) => state.totalPages);

  useEffect(() => {
    dispatch(fetchUsuarios(1, 4));
  }, [dispatch]);

  
  return (
    <Box className={s.fondo}>
      <Box className={s.cabezera}>
        <Typography variant="h6">Usuarios Habilitados</Typography>
        <Link to={"/admin/crearUsuariosAdmin"}>
          <Button
            style={{ borderRadius: "5px", backgroundColor: "#795548", color: "white" }}
          >
            Crear nuevo
          </Button>
        </Link>
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
            <Typography className={s.rol}>{usuario.rol}</Typography>
            <Box className={s.accion}>
              <Button id="deshabilitarBtn">Deshabilitar</Button>
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
      <Box className={s.pagination}>
      <Pagination
          count={""}
          showFirstButton
          showLastButton
          onChange={""}
        />
      </Box>
    </Box>
  );
}
