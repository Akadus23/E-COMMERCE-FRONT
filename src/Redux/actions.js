import arrayObjetos from "../Helpers/arrayObjetos"
import axios from "axios"

export const GET_DETAIL = 'GET_DETAIL'

export function getAllProducts(){
    return async (dispatch)=>{
        var data;
        const response = await (fetch(`http://190.100.208.178:3001/fakeprod`));
        if(response.ok){
            data = await response.json()
        } 
        return dispatch({
            type: 'GET_ALL_PRODUCTS',
            payload: data
        });
    }
}

export function getDetail(id){
    return async function(dispatch){
        const json = await axios(`http://localhost:3000/productos/${id}`);
        return dispatch({
            type: GET_DETAIL,
            payload: json.data
        });
    }
}

export function aplicarFiltros(categoriasYcolores){
    return {
        type: 'APLICAR_FILTROS',
        payload: categoriasYcolores
    }
}

export function addFavorites(producto){
    return {
        type: 'ADD_FAVORITES',
        payload: producto
    }
}

export function removeFavorites(producto){
    return {
        type: 'REMOVE_FAVORITES',
        payload: producto
    }
}