import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useLocation } from "react-router-dom";
import GalaxyNote from "../../Archivos pruebas/galaxy note 10.jpg";
import s from "./DetailProducto.module.css";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";
import ProductosDtl from "./Productos/ProductosDtl";
import Pago from "./Pagos/Pagos";
import Descripcion from "./Descripcion/Descripcion";
import { getDetail, addCarrito } from "../../Redux/actions";
//import ReviewCard from "../Reviews/ReviewCard";

//Aquí se renderiza el detalle de cada producto

export default function DetailProducto() {
  // Las CALIFICACIONES sera un array acumulativo de estreñas x compras del producto 

  const categorias = useSelector((state) => state.categorias);

const carrito = useSelector((state) => state.carrito);
console.log('categorias:',categorias  );
const [value, setValue] = React.useState(3);

  let { id } = useParams();
  const dispatch = useDispatch();
  const productDetails = useSelector( (state) => state.details );
  
  const { nombreproducto, descproducto, colorproducto, fotoprinc, precioproducto, disponibproducto, nombrecat,reviews } = productDetails;

  const categoriaId = productDetails.categoriaId;
  console.log('categoriaId:', categoriaId);

  const [cargando, setCargando] = useState(false)

  const categoria = categorias.find((cat) => cat.id === categoriaId);
  const nombreCategoria = categoria ? categoria.nombrecat : "";
 

  useEffect(() => {

    setCargando(true)
   dispatch(getDetail(id));
    setCargando(false)
  }, []);


  //######### OBTENER EL VALOR DE LA REVIEW###########
  const lengthReviews = reviews?.length
  const arrayReview = []
  reviews?.forEach(review => {
    arrayReview.push(review.rating)
  });
  const suma = arrayReview.reduce((ac, nu)=> ac+nu, 0)
  const calificacion = suma/arrayReview.length
 
  //########### EL HANDLE DE AGREGAR PRODUCTO AL CARRITO ##############
  function handleSubmit(e) {
   e.preventDefault();

   const productExists = carrito.some((producto) => producto.id === id);
   if (productExists) { alert("Este producto ya está en el carrito.");
     return; 
   }
   const productToAdd = {
     id: id,
     nombre: nombreproducto,
     valorunit: Number(precioproducto),
     cantidad: 1,
     imagen: fotoprinc,
     subtotalitem: 1 * precioproducto,
   };
   dispatch(addCarrito(productToAdd));
   alert(`Agregaste el producto ${nombreproducto} a tu carrito`);
  }

  

  return (
    <div>
      {cargando ? (
        <h1>Cargando info</h1>
      ): (
    <div className={s.fondo}>
      
      <form action="" onSubmit={handleSubmit} className={s.fromu}>
        <div className={s.producto}>Detalles del producto</div>
        <div className={s.cajaInterna}>
          <div className={s.cajaImagen}>
            <div className={s.imagenPosition}>
              <img
                src={fotoprinc}
                alt="image not found"
                className={s.imagen}
              ></img>
            </div>
            <div className={s.linea}></div>
            <h1>Descripcion :</h1>
            <Descripcion descripcion={descproducto}></Descripcion>
          </div>
          <div className={s.datos}>
            <h1>{productDetails.name}</h1>
            <h4>
              Categoria : <h5 style={{ color: "red" }}>{nombreCategoria}</h5>
            </h4>

            <h2>{nombreproducto}</h2>
            <p>${precioproducto}</p>

            {/* ###############  Boton para mostrar que tarjetas acepta All Market ################# */}

            <Pago></Pago>
            <h4>Color: {colorproducto?.join(", ")}</h4>
            <h4>Stock disponible:{disponibproducto}</h4>

            {/* ###############  BOTON DEL CARRITO ################# */}

            <button type="submit" className={s.agregar}>
              Agregar al carrito
            </button>

            <h3>Calificaciones:</h3>
            {/* ###############   Deberan ser mapeadar cada calificacion ################# */}
            <Box
              sx={{
                "& > legend": { mt: 2 },
              }}
            >
              <Typography component="legend"></Typography>
              <Rating
                name="read-only"
                value={calificacion}
                readOnly
              />
       
            </Box>
            <a
              href="https://www.soyhenry.com/?utm_source=google&utm_medium=cpc&utm_campaign=GADS_SEARCH_ARG_BRAND&utm_content=Brand&gad=1&gclid=Cj0KCQjwtO-kBhDIARIsAL6LorcDR-GnZb0eUPEkd6yyO2cXte6yEokKM93fcVlckILE3eU0a3JxTB8aAht3EALw_wcB"
              target="_blank"
            >
              <div className={s.propaganda}></div>
                        </a>
          </div>
        </div>
        </form>
        
        {reviews?.length === 0 ? <h3>Este producto aun no tiene reviews</h3>:
        <div style={{display: 'flex'}}>
        {/* <ReviewCard usuarioId={reviews[lengthReviews-1].usuarioId} description={reviews[lengthReviews-1].description} rating={reviews[lengthReviews-1].rating} createdAt={reviews[lengthReviews-1].createdAt}></ReviewCard>
        <ReviewCard usuarioId={reviews[lengthReviews-2].usuarioId} description={reviews[lengthReviews-2].description} rating={reviews[lengthReviews-2].rating} createdAt={reviews[lengthReviews-2].createdAt}></ReviewCard>
        <ReviewCard usuarioId={reviews[lengthReviews-3].usuarioId} description={reviews[lengthReviews-3].description} rating={reviews[lengthReviews-3].rating} createdAt={reviews[lengthReviews-3].createdAt}></ReviewCard> */}
        </div>}
        <div>
         
       
        {/* <ProductosDtl style={{ marginTop: '10px', marginBottom: '20px', marginRight: '20px', marginLeft: '20px'}}  /> */}
        </div>
    </div>)}
    </div>
  );
}
