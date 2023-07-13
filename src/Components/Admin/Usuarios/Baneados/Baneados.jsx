// import React from "react";
// import s from "./Baneados.module.css";
// import { useDispatch, useSelector } from "react-redux";
// import { Link } from "react-router-dom";
// import { setUsuarioDetail } from "../../../../Redux/actions";
// import { Pagination, Button, Box, Typography } from "@mui/material";

// export default function Baneados() {
//   const dispatch = useDispatch();

//   const usuarios = useSelector((state) => state.usuarios);
//   // const totalPages = useSelector((state) => state.totalPages);

//   // useEffect(() => {
//   //   dispatch(fetchUsuarios(1, 4));
//   // }, [dispatch]);

//   const setUsuarioDetailHandler = (usuarioId) => {
//     if (window.confirm("¿Estás seguro de que deseas habilitar al usuario?")) {
//       dispatch(setUsuarioDetail(usuarioId));
//     }
//   };

//   return (
//     <>
//     <Box className={s.fondo}>
//       <Box className={s.cabezera}>
//         <Typography variant="h6">Usuarios Habilitados</Typography>
//         <Link to={"/admin/crearUsuariosAdmin"}>
//           <Button
//             style={{
//               borderRadius: "5px",
//               backgroundColor: "#795548",
//               color: "white",
//             }}
//           >
//             Crear nuevo
//           </Button>
//         </Link>
//       </Box>
//       <Box className={s.barra}>
//         <Typography className={s.barraimagen}>Imagen</Typography>
//         <Typography className={s.barrausername}>Usuario</Typography>
//         <Typography className={s.barrarol}>Rol</Typography>
//         <Typography className={s.barraaccion}>Acción</Typography>
//         <Typography className={s.barraaccion}>Perfil</Typography>
//       </Box>
//       <Box className={s.cajaUsuarios}>
//         {usuarios.map((usuario) => (
//           <Box className={s.usuarios} key={usuario.id}>
//             <Box className={s.cajaImagen}>
//               <img src={usuario.picture} alt="" className={s.imagen} />
//             </Box>
//             <Typography className={s.username}>{usuario.name}</Typography>
//             <Typography className={s.rol}>{usuario.rol}</Typography>
//             <Box className={s.accion}>
//               <Button
//                 onClick={() => setUsuarioDetailHandler(usuario.id)}
//                 id="habilitarBtn"
//               >
//                 Habilitar
//               </Button>
//               <Link
//                 to={`/admin/perfilUsuario/${usuario.id}`}
//                 className={s.accion}
//                 style={{ textDecoration: "none" }}
//               >
//                 <Button>ver</Button>
//               </Link>
//             </Box>
//           </Box>
//         ))}
//       </Box>
//       <Box className={s.pagination}>
//         <Pagination
//           count={""}
//           showFirstButton
//           showLastButton
//           onChange={""}
//         />
//       </Box>
//     </Box>
//   </>
// );
// }
