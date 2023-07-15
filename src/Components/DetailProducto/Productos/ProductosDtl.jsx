import React, { useEffect, useState } from "react";
import s from "./ProductosDtl.module.css";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getAllProducts } from "../../../Redux/actions";


export default function ProductosDtl({productos}) {
const arrayRandom = []

const navigate = useNavigate()
const dispatch = useDispatch();



if(!productos){
  return <p>Esperando info</p>
}
function generarNumeroAleatorio() {
  for(let i = 0; i<4;i++){
  arrayRandom.push(Math.floor(Math.random() * productos.length));
  }
}
generarNumeroAleatorio()

function handleClickOtro(num){
  navigate(`/detailProducto/${num}`)
}


  return (

    <div className={s.caja2}>
      <div className={s.cajaInterna2}>
        
        {productos && arrayRandom?.map(num => (
           <div className={s.productos}>
           <div className={s.cajaImagen}>
             <img src={productos[num].fotoprinc} width={"100%"} heigth={"200 px"}style={{maxHeight: '100%'}}></img>
           </div>
           <div className={s.titulo}>{productos[num].nombreproducto}</div>
           <div className={s.precio}>
             <h3>${productos[num].precioproducto}</h3>
           </div>
           <button style ={{cursor: 'pointer'}} className={s.verMas} onClick={()=>handleClickOtro(productos[num].id)}>Ver Mas</button>
         </div>
      ))}
      </div>
    </div>
  );
}
