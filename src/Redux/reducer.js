import {
  GET_DETAIL,
  SET_USUARIO_DETAIL,
  CLEAR_USUARIO_DETAIL,
  FETCH_VENTAS_REQUEST,
  FETCH_VENTAS_SUCCESS,
  FETCH_VENTAS_FAILURE,
} from "./actions";

//Valores iniciales del estado global
const initialState = {
  nombreCategoria: "",
  allProducts: [],
  allProductsAux: [],
  details: {
    nombreproducto: "",
    descproducto: "",
    colorproducto: [],
    fotoprinc: "hola",
    precioproducto: 0,
    disponibproducto: 0,
    nombrecat: "",
    reviews: [],
  },
  favoritos: [],
  categorias: [],
  carrito: [],
  paginas: 0,
  busquedaProducto: [],
  busquedaProductoAux: [],
  pagsBusqueda: 0,
  productoBuscado: "",
  usuarioDetail: [],
  error: null,
  usuarios: [],
  loading: false,
  paginaActual: 1,
  totalPages: 0,
  totalUsuarios: 0,
  usuariosHabilidatosAux: [],
  productosVentas: [],
  SumatoriaVentas: null,
  totalPagesVentas: 1,
};
console.log(initialState.totalPages);
export default function rootReducer(state = initialState, { type, payload }) {
  switch (type) {
    //aca van las acciones que se requieran hacer de redux

    //Accion de prueba para la funcionalidad de redux
    case "TEST_ACTION":
      return {
        ...state,
      };

    case "FETCH_PRODUCTOS_SUCCESS":
      return {
        ...state,
        productosVentas: payload,
      };
    case "FETCH_TOTAL_VENTAS":
      return {
        ...state,
        SumatoriaVentas: payload,
      };

    case "GET_ALL_PRODUCTS":
      return {
        ...state,
        allProducts: payload.productos,
        allProductsAux: payload.productos,
        paginas: payload.totalPages,
      };

    case "FETCH_USUARIOS_REQUEST":
      return {
        ...state,
        loading: true,
        error: null,
      };

    case "FETCH_USUARIOS_SUCCESS":
      return {
        ...state,
        loading: false,
        usuarios: payload.usuarios,
        totalPages: payload.totalPages,
        totalUsuarios: state.totalUsuarios, // Mantener el número total de usuarios en el estado
      };

    case "FETCH_USUARIOS_FAILURE":
      return {
        ...state,
        loading: false,
        error: payload,
      };

    case "GET_ALL_USUARIOS_SUCCESS":
      return {
        ...state,
        usuariosHabilidatos: payload,
        error: null,
      };
    case "GET_ALL_USUARIOS_FAILURE":
      return {
        ...state,
        usuariosHabilidatos: [],
        error: payload,
      };

    case "GET_ALL_CATEGS":
      return {
        ...state,
        categorias: payload,
      };

    case "NAME_CATEGORIA":
      return {
        ...state,
        nombreCategoria: payload,
      };

    case GET_DETAIL:
      return {
        ...state,
        details: payload,
      };
    case "USUARIO_ID":
      return {
        ...state,
        usuarioDetail: payload,
      };

    case "APLICAR_FILTROS":
      return {
        busquedaProducto: payload.productos,
        pagsBusqueda: payload.totalPages,
        busquedaProductoAux: payload.productos,
      };

    case "ADD_FAVORITES":
      var favs = state.favoritos;
      favs.push(payload);
      return {
        ...state,
        favoritos: favs,
      };

    case "REMOVE_FAVORITES":
      var filterFavs = state.favoritos;
      var resultFavs = filterFavs.filter(
        (prod) => prod.nombreproducto === payload.nombreproducto
      );
      return {
        ...state,
        favoritos: resultFavs,
      };

    case "AGREGAR_AL_CARRITO":
      return {
        ...state,
        carrito: [...state.carrito, payload],
      };
    case "BUSCAR_PRODUCTO":
      return {
        ...state,
        busquedaProducto: payload.data.productos,
        pagsBusqueda: payload.data.totalPages,
      };
    case "LIMPIAR_TODO":
      return {
        ...state,
        allProducts: state.allProductsAux,
      };
    case SET_USUARIO_DETAIL:
      return {
        ...state,
        usuarioDetail: payload,
      };
    case CLEAR_USUARIO_DETAIL:
      return {
        ...state,
        usuarioDetail: [],
      };
      case "EDITAR_PRODUCTO":
        const productoEditado = payload; // Datos actualizados del producto
        const productosActualizados = state.allProducts.map((producto) => {
          if (producto.id === productoEditado.id) {
            return productoEditado;
          } else {
            return producto;
          }
        });
      
        return {
          ...state,
          allProducts: productosActualizados,
      };
      case 'UPDATE_CARRITO':
 const { id, cantidad, valorunit, subtotalitem } = payload;

 const updatedCarrito = state.carrito.map((producto) => {
   if (producto.id === id) {
     return {
       ...producto,
       cantidad,  
       valorunit,                        
       subtotalitem
     };
   }
   return producto; });

   return {
     ...state,
     carrito: updatedCarrito
   }; 

 case "LIMPIAR_CARRITO":
  return { ...initialState, };

  case "REINICIA_STORE":
   return {        
     loggedUser:"claudiodavid339@gmail.com",
     nombreCategoria: "",
     allProducts: [],
     allProductsAux: [],
     details: [],
     favoritos: [],
     categorias: [],
     carrito: [],
     oc: {},
     detalleoc: [],
     paginas: 0,
     busquedaProducto: [],
     pagsBusqueda: 0                   
   };
      
   case "DELETE_PRODCARRO":
      const updatedCarritox = state.carrito.filter(product => product.id !== payload);
      return {
        ...state,
        carrito: updatedCarritox
      };

    default:
      return state;
  }
}
