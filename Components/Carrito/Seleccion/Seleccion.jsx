import React from "react";
import { useDispatch } from "react-redux";
import s from "./Seleccion.module.css";
import { updateCarrito, removeFavorites } from "../../../Redux/actions";

const Seleccion = ({ key, pokes, updateQuantity, deleteProduct, valorunitario }) => {
 const dispatch = useDispatch();
 const { id, nombre, imagen, cantidad,  precio } = pokes;

 const handleIncrement = () => { 
  if (cantidad < 10) { 
    updateQuantity(id, cantidad + 1, precio); 
    const subtotal = (cantidad + 1) * valorunitario;      
    dispatch(updateCarrito(id, cantidad + 1, valorunitario, subtotal));     
  } 
};
const handleDecrement = () => { 
 if (cantidad > 1)  { 
   updateQuantity(id, cantidad - 1, precio); 
   const subtotal = (cantidad - 1) * valorunitario;
   dispatch(updateCarrito(id, cantidad - 1, valorunitario, subtotal));
 } 
};
const handleDelete = () => {  deleteProduct(id);  };
const precioTotal = cantidad * valorunitario;
console.log('valorunitario: ', valorunitario);

return (
 <div className={s.fondo}>
   <div className={s.cajaImagen}>
     <img src={imagen} alt="" className={s.imagen} />
   </div>
   <div className={s.caja2}>
     <h2>{nombre}</h2>
     <button className={s.eliminar} onClick={handleDelete}>
       Eliminar
     </button>
   </div>
   <div className={s.cantidad}>
     <div className={s.botones}>
       <button onClick={handleDecrement}>-</button>
       {cantidad}
       <button onClick={handleIncrement}>+</button>
     </div>
   </div>
   <div className = {s.subtotal}>Prec: ${valorunitario}</div>
   <div className = {s.subtotal}>Subt: ${(precioTotal )}</div>
   <div className = {s.separador}></div>
 </div>
);
};

export default Seleccion;