import AuthService from "../Services/AuthService";
//import arrayObjetos from "../Helpers/arrayObjetos";
import axios from "axios";

export const GET_DETAIL = "GET_DETAIL";
export const SET_USUARIO_DETAIL = "SET_USUARIO_DETAIL";
export const CLEAR_USUARIO_DETAIL = "CLEAR_USUARIO_DETAIL";

const urlBack = 'http://localhost:3001';
//const urlBack = 'https://commerce-back-2025.up.railway.app';

export function showMessage(message) {  alert(message);  }



export function getAllProducts(pagina) {
 const linkBackLocal = urlBack+`/producto?page=${pagina}`;
return async (dispatch) => {   
try{  
  const response = await axios.get(linkBackLocal); 
  const data = response.data;   
  data.productos.forEach((producto) => {   producto.precioproducto = parseInt(producto.precioproducto);   });
  return dispatch({
     type: "GET_ALL_PRODUCTS",
     payload: data,
   });
  }
  catch(error){ showMessage(" ERROR CONEXION BACKEND !!: "+urlBack+' .');   }
 };
}



// export function getAllProducts(pagina, producto, color, cate, precio) {
//  if (!producto) producto = "";
//  const queryColor = color?.length > 0 ? color.join("&color=") : "";
//  const queryCate = cate?.length > 0 ? cate.join("&cate=") : "";
//  const link = urlBack + `/producto/buscar?prod=${producto}&page=${pagina}&price=${precio}&color=${queryColor}&cate=${queryCate}`;

//  return async (dispatch) => {
//    const response = await axios.get(link);
//    const data = response.data;   
//   data.productos.forEach((producto) => {   producto.precioproducto = parseInt(producto.precioproducto);   });
//    return dispatch({
//      type: "GET_ALL_PRODUCTS",
//      payload: data,
//    });
//  };
// }


export function getAllCategorias() { 
  const linkBackLocal = urlBack+"/categorias";
  return async (dispatch) => {
    const data = (await axios.get(linkBackLocal)).data;
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
   const json = await axios(  urlBack+`/producto/${id}`  );
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

export const updateCarrito = (id, cantidad, valorunit, subtotalitem) => {
 return {
   type: 'UPDATE_CARRITO',
   payload: {
     id,
     cantidad, 
     valorunit,         
     subtotalitem
   }
 };
};

export function obtenerCategoriaPorId(id) {
 return async function (dispatch) {
   const json = await axios( urlBack+`/categorias/${id}`  );
   return dispatch({
     type: "NAME_CATEGORIA",
     payload: json.data.nombrecat,
   });
 };
}

export const setNombreCategoria = (nombreCategoria) => ({
 type: "SET_NOMBRE_CATEGORIA",
 payload: nombreCategoria,
});

export function buscarProducto(pagina, producto) {
 const linkFelipe = urlBack+`/producto/buscar?prod=${producto}&cate=&page=${pagina}`;
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
 /**  LIMPIAR carrito DE LA PERSISTENCIA  */
export const limpiarCarrito = () => {
 return {  type: "LIMPIAR_CARRITO" };
};
/** REINICIA STORE */
export const reinicia_store = () => {
return {  type: "REINICIA_STORE"  }; 
};
 
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
      .get(urlBack+`/usuarios?page=${page}&limit=${limit}`)
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
    const json = await axios( urlBack+`/usuarios/${id}`);
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

export function editarProducto(id) {
  return async function (dispatch) {
    try {
      // Realiza la solicitud para editar el producto en el backend
      const response = await axios.put( urlBack+`/producto/${id}` );

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