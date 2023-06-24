import React, { useState } from 'react'

//Aqui se renderiza el formulario para crear un nuevo producto

export default function FormProducto() {

  const [colores, setColores]= useState([]);
  const [inputColor, setInputColor]= useState("");

  const[producto, setProducto] = useState({
    name: "",
    image: "",
    stock:"",
    description:"",
    price:"",
  })

  // Funcion que maneja el input de colores
  function handleChangeColores(e){
    setInputColor(e.target.value)
  }
  // Funcion que agrega el input del color a un array de colores 
  function handleClickColor(e){
    e.preventDefault();
    setColores([...colores, inputColor])
    setInputColor("")
  }
  // Función que borra el ultimo color agregado al array de colores 
  function handleClickQuitarColor(e){
    e.preventDefault();
    setColores(array=>{
      const newArray = [...array];
      newArray.pop();
      return newArray;
    })
  }
  //Función que maneja los cambios de los inputs 
  function handleChangeForm(e){
    setProducto({
      ...producto,
      [e.target.name]: e.target.value
    })
  }

  function handleSubmitForm(e){
    //e.preventDefault();
    const datos = {
      name: producto.name,
      image: producto.image,
      stock: producto.stock,
      description: producto.description,
      price: producto.precio,
      colores: colores
    }
    var datosString = JSON.stringify(datos);
    alert("el producto a crear será"+datosString)
  }

  return (
    <div>
      <form className='form'>
        <div><label>Nombre producto: </label><input name='name' value={producto.name} onChange={handleChangeForm}></input></div>
        <div><label>Imágen Principal:</label><input name='image' value={producto.image} onChange={handleChangeForm}></input></div>
        <div><label>Cantidad:</label><input name='stock' value={producto.cantidad} onChange={handleChangeForm}></input></div>
        <div><label>Descripción:</label><textarea name='description' value={producto.descripcion} onChange={handleChangeForm}></textarea></div>
        <div><label>Precio:</label><input name='price' value={producto.precio} onChange={handleChangeForm}></input></div>
        <div><label>Colores:</label><input name='color' value={inputColor} onChange={handleChangeColores}></input>
             <button onClick={handleClickColor}>Agregar color</button>
             <button onClick={handleClickQuitarColor}>Quitar último color</button></div>
        <div>
          <label>Colores añadidos: </label>
          <ul>
            {colores && colores.map((col)=>{
              return <li>{col}</li>
            })}
          </ul>
        </div>
       <button onClick={handleSubmitForm}>Crear Producto</button> 
      </form>
    </div>
  )
}
