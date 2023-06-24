import React, { useState } from 'react'

export default function SearchBar() {
    const [producto, setProducto] = useState("");

    function handleChange(e){
        setProducto(e.target.value)
    }

    function handleClick(e){

    }

  return (
    <div>
        <input onChange={handleChange} value={producto}></input>
        <button onClick={handleClick}>Buscar Producto</button>
    </div>
  )
}
