import axios from 'axios'
import React from 'react'
import {useSelector, useDispatch} from 'react-redux'

export default function ArrayObjetos() {

  const { allProducts} = useSelector((state)=>state)

  const arrayObjetos = [
    {
    nombreproducto: "reloj antiguo",
    fotoprinc:"https://cdn.pixabay.com/photo/2016/12/08/11/50/time-1891565_640.png",
    disponibproducto:155,
    descproducto: "Telefono inteligente"
    ,precioproducto:5,
    colorproducto:["dorado"],
    nombrecat:"Hogar"
    },
    {    nombreproducto: "Boligrafos",
        descproducto: "Bolígrafos de varios colores para que puedas escribir todo lo que quieras ",
        colorproducto: [
          "Rojo",
          "Negro",
          "Azul"
        ],
        fotoprinc: "http://res.cloudinary.com/dmjkjz1oa/image/upload/v1688138607/shoppieimg/dwi6vcxhcdjkxfm3kxgi.jpg",
        precioproducto: 6,
        disponibproducto: 1000,
        nombrecat:"Papelería"
    },
     {"nombreproducto": "TV Antiguo",
     "descproducto": "TV con diseño antiguo en blanco y negro",
     "colorproducto": [
       "Unico"
     ],
     "fotoprinc": "https://cdn.pixabay.com/photo/2013/07/13/14/02/tv-162002_640.png",
     "precioproducto": 20,
     "disponibproducto": 10,
    "nombrecat":"Hogar"
    },
    {
      "nombreproducto": "Fresas",
            "descproducto": "Fresas buenas para comer ",
            "colorproducto": [
              "Rojo"
            ],
            "fotoprinc": "https://cdn.pixabay.com/photo/2016/04/15/08/04/strawberry-1330459_640.jpg",
            "precioproducto": 2,
            "disponibproducto": 100,
      "nombrecat":"Alimentos"},
      {"nombreproducto": "Cerezas",
          "descproducto": "cerezas buenas para comer ",
          "colorproducto": [
            "Rojo"
          ],
          "fotoprinc": "https://cdn.pixabay.com/photo/2021/06/04/06/09/cherries-6308871_640.jpg",
          "precioproducto": 7,
          "disponibproducto": 100,
    "nombrecat":"Alimentos"},
    { "nombreproducto": "Miel",
          "descproducto": "Miel dulce directamente del panal ",
          "colorproducto": [
            "miel"
          ],
          "fotoprinc": "https://cdn.pixabay.com/photo/2017/01/06/17/49/honey-1958464_640.jpg",
          "precioproducto": 15,
          "disponibproducto": 10,
    "nombrecat":"Alimentos"},
    {"nombreproducto": "Pan",
          "descproducto": "Pan recien hecho ",
          "colorproducto": [
            "Unico"
          ],
          "fotoprinc": "https://cdn.pixabay.com/photo/2018/06/10/20/30/bread-3467243_640.jpg",
          "precioproducto": 10,
          "disponibproducto": 100,
    "nombrecat":"Alimentos"},
    {"nombreproducto": "Labial",
          "descproducto": "Labial color intenso para mujer",
          "colorproducto": [
            "Rojo"
          ],
          "fotoprinc": "https://cdn.pixabay.com/photo/2021/10/10/21/52/makeup-6698881_640.jpg",
          "precioproducto": 11,
          "disponibproducto": 50,
    "nombrecat":"Belleza"},
    {"nombreproducto": "Kit belleza",
          "descproducto": "Kit belleza completo ",
          "colorproducto": [
            "Rojo",
            "azul"
          ],
          "fotoprinc": "https://cdn.pixabay.com/photo/2017/09/13/16/08/cosmetics-2746013_640.jpg",
          "precioproducto": 12,
          "disponibproducto": 40,
    "nombrecat":"Belleza"},
    {"nombreproducto": "Cerezas premium",
          "descproducto": "cerezas buenas para comer ",
          "colorproducto": [
            "Rojo"
          ],
          "fotoprinc": "https://cdn.pixabay.com/photo/2021/06/04/06/09/cherries-6308871_640.jpg",
          "precioproducto": 18,
          "disponibproducto": 100,
    "nombrecat":"Alimentos"},
    { "nombreproducto": "Miel",
          "descproducto": "Miel dulce directamente del panal ",
          "colorproducto": [
            "miel"
          ],
          "fotoprinc": "https://cdn.pixabay.com/photo/2017/01/06/17/49/honey-1958464_640.jpg",
          "precioproducto": 4,
          "disponibproducto": 10,
    "nombrecat":"Alimentos"},
    {"nombreproducto": "Pan",
          "descproducto": "Pan recien hecho ",
          "colorproducto": [
            "Unico"
          ],
          "fotoprinc": "https://cdn.pixabay.com/photo/2018/06/10/20/30/bread-3467243_640.jpg",
          "precioproducto": 8,
          "disponibproducto": 100,
    "nombrecat":"Alimentos"},
    {
      nombreproducto: "reloj antiguo",
      fotoprinc:"https://cdn.pixabay.com/photo/2016/12/08/11/50/time-1891565_640.png",
      disponibproducto:155,
      descproducto: "Telefono inteligente"
      ,precioproducto:11,
      colorproducto:["dorado"],
      nombrecat:"Hogar"
      },
      {    nombreproducto: "Boligrafos",
          descproducto: "Bolígrafos de varios colores para que puedas escribir todo lo que quieras ",
          colorproducto: [
            "Rojo",
            "Negro",
            
          ],
          fotoprinc: "http://res.cloudinary.com/dmjkjz1oa/image/upload/v1688138607/shoppieimg/dwi6vcxhcdjkxfm3kxgi.jpg",
          precioproducto: 17,
          disponibproducto: 1000,
          nombrecat:"Papelería"
      },
      {"nombreproducto": "Labial",
          "descproducto": "Labial color intenso para mujer",
          "colorproducto": [
            "Rojo"
          ],
          "fotoprinc": "https://cdn.pixabay.com/photo/2021/10/10/21/52/makeup-6698881_640.jpg",
          "precioproducto": 11,
          "disponibproducto": 50,
    "nombrecat":"Cosmeticos"},
    {"nombreproducto": "Kit belleza",
          "descproducto": "Kit belleza completo ",
          "colorproducto": [
            "Rojo",
            "azul"
          ],
          "fotoprinc": "https://cdn.pixabay.com/photo/2017/09/13/16/08/cosmetics-2746013_640.jpg",
          "precioproducto": 19,
          "disponibproducto": 40,
    "nombrecat":"Cosmeticos"},
        ]
    

function handleClick(e){
  arrayObjetos.forEach(objeto=>{
    axios.post("/productoCrear", objeto)
  })
  
}

function handleClickRevs(e){
  const arrayRevs = []
  for(let i= 1; i<15; i++){
    for(let j= 1; j<10; j++){
      var rating = Math.floor(Math.random()*5)+1
      var description = "meh"
      if(rating === 1) description = "Muy malo"
      if(rating === 3) description = "Normal"
      if(rating === 5) description = "Muy bueno "
      var review = {
        productoId: i,
        usuarioId: j,
        description: description,
        rating: rating
      }
      axios.post("/review", review)
      arrayRevs.push(review)
    }
  }
  
    alert(arrayRevs)
}

  return (
    <div>
      <button onClick={handleClick}>arrayObjetos</button>
      <button onClick={handleClickRevs}>Cargar reviews</button>
      </div>

  )
}
