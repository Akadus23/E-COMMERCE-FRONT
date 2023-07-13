import AuthService from "../Services/AuthService";
//import arrayObjetos from "../Helpers/arrayObjetos";
import axios from "axios";

export const GET_DETAIL = "GET_DETAIL";
export const SET_USUARIO_DETAIL = "SET_USUARIO_DETAIL";
export const CLEAR_USUARIO_DETAIL = "CLEAR_USUARIO_DETAIL";
export const CARGAR_PRODUCTO = "CARGAR_PRODUCTO";

export function getAllProducts(pagina, producto, color, cate, precio) {
  if (!producto) producto = "";
  const queryColor = color?.length > 0 ? color.join("&color=") : "";
  const queryCate = cate?.length > 0 ? cate.join("&cate=") : "";
  const link = `https://commerce-back-2025.up.railway.app/producto/buscar?prod=${producto}&page=${pagina}&price=${precio}&color=${queryColor}&cate=${queryCate}`;

  return async (dispatch) => {
    const data =
      //.content;           //para el local
      (await axios.get(link)).data; //para el deploy
    return dispatch({
      type: "GET_ALL_PRODUCTS",
      payload: data,
    });
  };
}

export function getAllCategorias() {
  const linkFelipe = `/categorias`;
  //const linkBackLocal = "http://localhost:3001/productos/productos";
  return async (dispatch) => {
    const data = (await axios.get(linkFelipe)).data;
    //.content;           //para el local
    //para el deploy
    return dispatch({
      type: "GET_ALL_CATEGS",
      payload: data,
    });
  };
}

export function getDetail(id) {
  return async function (dispatch) {
    
    const json = await axios(
      // `https://e-commerce-back-2025.up.railway.app/producto/3`
      `/producto/${id}`
    );
    return dispatch({
      type: GET_DETAIL,
      payload: json.data,
    });
  
  };
}

export function aplicarFiltros(pagina, producto, color, cate, precio) {
  if (!producto) producto = "";
  const queryColor = color?.length > 0 ? color.join("&color=") : "";
  const queryCate = cate?.length > 0 ? cate.join("&") : "";
  const link = `/producto/buscar?prod=${producto}&page=${pagina}&price=${precio}&color=${queryColor}&cate=${queryCate}`;

  return async (dispatch) => {
    const data =
      //.content;           //para el local
      (await axios.get(link)).data; //para el deploy
    return dispatch({
      type: "APLICAR_FILTROS",
      payload: data,
    });
  };
}

export function addFavorites(producto) {
  return {
    type: "ADD_FAVORITES",
    payload: producto,
  };
}

export const log_in = (data) => (dispatch) => {
  return AuthService.Login(data);
};

export function removeFavorites(producto) {
  return {
    type: "REMOVE_FAVORITES",
    payload: producto,
  };
}

export function addCarrito(producto) {
  return {
    type: "AGREGAR_AL_CARRITO",
    payload: producto,
  };
}
export function obtenerCategoriaPorId(id) {
  return async function (dispatch) {
    const json = await axios(`/categorias/${id}`);
    return dispatch({
      type: "NAME_CATEGORIA",
      payload: json.data,
    });
  };
}

export function buscarProducto(pagina, producto) {
  const linkFelipe = `https://commerce-back-2025.up.railway.app/producto/buscar?prod=${producto}&cate=&page=${pagina}`;
  //const linkBackLocal = "http://localhost:3001/productos/productos";
  return async (dispatch) => {
    const data =
      //.content;           //para el local
      (await axios.get(linkFelipe)).data; //para el deploy
    return dispatch({
      type: "BUSCAR_PRODUCTO",
      payload: { data: data, prod: producto },
    });
  };
}

export function limpiarFiltroyBusqueda() {
  return {
    type: "LIMPIAR_TODO",
  };
}

// export const getAllUsuarios = (page, limit) => {
//   return async (dispatch) => {
//     try {
//       const response = await axios.get(
//         `https://commerce-back-2025.up.railway.app/usuarios?page=${page}&limit=${limit}`
//       );
//       const usuarios = response.data.usuarios;
//       console.log(response.data.usuarios);
//       dispatch({
//         type: "GET_ALL_USUARIOS_SUCCESS",
//         payload: usuarios.usuarios,
//       });
//     } catch (error) {
//       dispatch({
//         type: "GET_ALL_USUARIOS_FAILURE",
//         payload: error.message,
//       });
//     }
//   };
// };

export const fetchUsuariosRequest = () => {
  return {
    type: "FETCH_USUARIOS_REQUEST",
  };
};

export const fetchUsuariosSuccess = (usuarios, totalPages) => {
  return {
    type: "FETCH_USUARIOS_SUCCESS",
    payload: {
      usuarios,
      totalPages,
    },
  };
};

export const fetchUsuariosFailure = (error) => {
  return {
    type: "FETCH_USUARIOS_FAILURE",
    payload: error,
  };
};

export const fetchUsuarios = (page, limit) => {
  return (dispatch) => {
    dispatch(fetchUsuariosRequest());
    axios
      .get(
        `https://commerce-back-2025.up.railway.app/usuarios?page=${page}&limit=${limit}`
      )
      .then((response) => {
        const usuarios = response.data.usuarios;
        const totalPages = response.data.totalPages;
        dispatch(fetchUsuariosSuccess(usuarios, totalPages));
      })
      .catch((error) => {
        dispatch(fetchUsuariosFailure(error.message));
      });
  };
};

export function usuarioId(id) {
  return async function (dispatch) {
    const json = await axios(
      `https://commerce-back-2025.up.railway.app/usuarios/${id}`
    );
    //console.log(json.data);
    return dispatch({
      type: "USUARIO_ID",
      payload: json.data,
    });
  };
}

export const setUsuarioDetail = (usuario) => {
  return {
    type: "SET_USUARIO_DETAIL",
    payload: usuario,
  };
};

export function editarProducto(id, productoEditado) {
  return async function (dispatch) {
    try {
      // Realiza la solicitud para editar el producto en el backend
      const response = await axios.put(
        `https://commerce-back-2025.up.railway.app/producto/${id}`,
        productoEditado
      );

      // Si la solicitud es exitosa, despacha una acción para actualizar el estado en Redux
      if (response.status === 200) {
        dispatch({
          type: "EDITAR_PRODUCTO",
          payload: response.data,
        });
      }
    } catch (error) {
      console.error(error);
    }
  };
}

export function cargarProducto(id) {
  return async function (dispatch) {
    try {
      // Realiza la solicitud para cargar el producto en el backend utilizando el ID
      const response = await axios.get(
        `https://commerce-back-2025.up.railway.app/producto/${id}`
      );

      // Si la solicitud es exitosa, despacha una acción para actualizar el estado en Redux
      if (response.status === 200) {
        dispatch({
          type: "CARGAR_PRODUCTO",
          payload: response.data,
        });
      }
    } catch (error) {
      console.error(error);
    }
  };
}