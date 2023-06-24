import React from 'react'
import './CardProducto.css'

//Aqui se renderiza la carta de cada producto

export default function CardProducto({name, image, price}) {
  return (
    <div className='cards'>
      <h3>{name}</h3>
      <img src={image} alt={name} style={{width: '200px', height: '200px'}}></img>
      <h4>${price}</h4>
    </div>
  )
}
