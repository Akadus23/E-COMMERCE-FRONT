import arrayObjetos from "../Helpers/arrayObjetos"
import axios from "axios"

export const GET_DETAIL = 'GET_DETAIL'

export function getAllProducts(){
    const linkFelipe = `http://190.100.208.178:3001/fakeprod`
    const linkBackLocal= 'http://localhost:3001/productos/productos'
    return async (dispatch)=>{
        var data;
        var content;
        const response = await (fetch(linkBackLocal));
        if(response.ok){
            data = await response.json()
            content = data.content;
        } 
        return dispatch({
            type: 'GET_ALL_PRODUCTS',
            payload: content
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