// import React, { useState, useEffect } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { Box, Button, Container, Grid, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography, Pagination, IconButton } from '@mui/material';
// import { getAllProducts } from '../../../Redux/actions';
// import EditIcon from '@mui/icons-material/Edit';
// import { useNavigate, Link } from 'react-router-dom'; 

// export default function Publicaciones() {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   useEffect(() => {
//     dispatch(getAllProducts(1));
//   }, [dispatch]);

//   function handleChangePagina(e, value) {
//     dispatch(getAllProducts(value));
//   }
  
//   const { allProducts, paginas } = useSelector((state) => ({
//     allProducts: state.allProducts,
//     paginas: state.paginas,
//   }));
  
//   const productos2 = allProducts;

//   const [productosMostrados, setProductosMostrados] = useState(3);
//   const mostrarMasProductos = () => {
//     setProductosMostrados((prevProductosMostrados) => prevProductosMostrados + 3);
//   };

//   const handleEditarProducto = (id) => {
//     // Redirige al formulario de edición con el ID del producto como parámetro en la URL
//     navigate(`/editar-producto/${id}`);
//   }

//   return (
//     <Box
//       sx={{
//         display: 'flex',
//         flexDirection: 'column',
//         justifyContent: 'center',
//         alignItems: 'center',
//         height: '100%',
//       }}
//     >
//       <TableContainer>
//         <Table>
//           <TableHead>
//             <TableRow>
//               <TableCell>Nombre</TableCell>
//               <TableCell>Stock</TableCell>
//               <TableCell>Precio</TableCell>
//               <TableCell>Editar</TableCell>
//             </TableRow>
//           </TableHead>
//           <TableBody>
//             {productos2?.slice(0, productosMostrados).map((producto) => (
//               <TableRow key={producto.id}>
//                 <TableCell>{producto.nombreproducto}</TableCell>
//                 <TableCell>{producto.disponibproducto}</TableCell>
//                 <TableCell>{producto.precioproducto}</TableCell>
//                 <TableCell>
//                   <IconButton component={Link} to={`/editar-producto/${producto.id}`} onClick={() => handleEditarProducto(producto.id)}>
//                     <EditIcon />
//                   </IconButton>
//                 </TableCell>
//               </TableRow>
//             ))}
//           </TableBody>
//         </Table>
//       </TableContainer>

//       <Button variant="contained" onClick={mostrarMasProductos}>
//         Mostrar más
//       </Button>

//       <Pagination count={paginas} showFirstButton showLastButton onChange={handleChangePagina} />
//     </Box>
//   );
// }


///////////////////////////////////////////////////////////////
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useLocation } from "react-router-dom";
import { Rating, Typography, Box, Button, Avatar, TableRow, TableCell, Table, TableBody } from "@mui/material";
// import ProductosDtl from "../../DetailProducto/Productos/ProductosDtl";
// import Pago from "./Pagos/Pagos";
// import Descripcion from "./Descripcion/Descripcion";
// import DetailProducto from "./DetailProducto";
import { getAllProducts, addCarrito,  } from "../../../Redux/actions";
import ReviewCard from "../../Reviews/ReviewCard";

const TablaProductos = () => {
  const productos = useSelector((state) => state.allProducts);

  return (
    <Table>
      <TableBody>
        {productos.map((producto) => (
          <TableRow key={producto.id}>
            <TableCell>
              {/* <DetailProducto producto={producto} /> */}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default function Publicaciones({ producto }) {
  let { id } = useParams();
  const dispatch = useDispatch();
  const location = useLocation();

  const carrito = useSelector((state) => state.carrito);
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    dispatch(getDetail(id));
    if (productos.length < 10) dispatch(getAllProducts(1));
    setCargando(false);
  }, [dispatch, id]);

  const ProductosDtl = useSelector((state) => state.details);
  const productos = useSelector((state) => state.allProducts);

  if (cargando) {
    return <p>Cargando</p>;
  }

  const {
    nombreproducto,
    descproducto,
    colorproducto,
    fotoprinc,
    precioproducto,
    disponibproducto,
    nombrecat,
    reviews,
  } = ProductosDtl;

  const lengthReviews = reviews?.length;
  const arrayReview = [];
  reviews?.forEach((review) => {
    arrayReview.push(review.rating);
  });
  const suma = arrayReview.reduce((ac, nu) => ac + nu, 0);
  const calificacion = suma / arrayReview.length;

  function handleSubmit(e) {
    e.preventDefault();

    const productExists = carrito.some((producto) => producto.id === id);
    if (productExists) {
      alert("Este producto ya está en el carrito.");
      return;
    }
    
    const productToAdd = {
      id: id,
      nombre: nombreproducto,
      valorunit: precioproducto,
      cantidad: 1,
      imagen: fotoprinc,
      subtotalitem: 1 * precioproducto,
    };
    dispatch(addCarrito(productToAdd));
    alert(`Agregaste el producto ${nombreproducto} a tu carrito`);
  }

  const getDetail = (id) => {
    // Lógica para obtener el detalle del producto
    dispatch(getDetail(id));
    if (productos.length < 10) dispatch(getAllProducts(1));
    setCargando(false);
  };
  
  return (
    <Box className="fondo">
      <form action="" onSubmit={handleSubmit} className="fromu">
        <Typography variant="h6" className="producto">
          Detalles del producto
        </Typography>
        <Box className="cajaInterna">
          <Box className="cajaImagen">
            <Box className="imagenPosition">
              <Avatar
                src={fotoprinc}
                alt="image not found"
                className="imagen"
              ></Avatar>
            </Box>
            <Box className="linea"></Box>
            <Typography variant="h6">Descripcion :</Typography>
            {/* <Descripcion descripcion={descproducto}></Descripcion> */}
          </Box>
          <Box className="datos">
            <Typography variant="h6">{nombreproducto}</Typography>
            <Typography variant="subtitle1">
              Categoria : <Typography variant="subtitle2" style={{ color: "red" }}>{nombrecat}</Typography>
            </Typography>

            <Typography variant="h5">{nombreproducto}</Typography>
            <Typography variant="body1">${precioproducto}</Typography>

            {/* Boton para mostrar que tarjetas acepta All Market */}
            {/* <Pago></Pago> */}

            <Typography variant="subtitle1">Color: {colorproducto?.join(", ")}</Typography>
            <Typography variant="subtitle1">Stock disponible: {disponibproducto}</Typography>

            {/* Boton del carrito */}
            <Button type="submit" variant="contained" className="agregar">
              Agregar al carrito
            </Button>

            <Typography variant="h6">Calificaciones:</Typography>
            {/* Deberan ser mapeadas cada calificacion */}
            <Box
              sx={{
                "& > legend": { mt: 2 },
              }}
            >
              <Typography component="legend"></Typography>
              <Rating name="read-only" value={calificacion} readOnly />
            </Box>
            <a
              href="https://www.soyhenry.com/?utm_source=google&utm_medium=cpc&utm_campaign=GADS_SEARCH_ARG_BRAND&utm_content=Brand&gad=1&gclid=Cj0KCQjwtO-kBhDIARIsAL6LorcDR-GnZb0eUPEkd6yyO2cXte6yEokKM93fcVlckILE3eU0a3JxTB8aAht3EALw_wcB"
              target="_blank"
            >
              <div className="propaganda"></div>
            </a>
          </Box>
        </Box>
      </form>

      <Box>
        {reviews && reviews.length === 0 ? (
          <Typography variant="h6">Este producto aún no tiene reviews</Typography>
        ) : (
          <Box style={{ display: "flex" }}>
            {reviews && reviews.length >= 3 && (
              <>
                <ReviewCard
                  usuarioId={reviews[reviews.length - 1].usuarioId}
                  description={reviews[reviews.length - 1].description}
                  rating={reviews[reviews.length - 1].rating}
                  createdAt={reviews[reviews.length - 1].createdAt}
                ></ReviewCard>
                <ReviewCard
                  usuarioId={reviews[reviews.length - 2].usuarioId}
                  description={reviews[reviews.length - 2].description}
                  rating={reviews[reviews.length - 2].rating}
                  createdAt={reviews[reviews.length - 2].createdAt}
                ></ReviewCard>
                <ReviewCard
                  usuarioId={reviews[reviews.length - 3].usuarioId}
                  description={reviews[reviews.length - 3].description}
                  rating={reviews[reviews.length - 3].rating}
                  createdAt={reviews[reviews.length - 3].createdAt}
                ></ReviewCard>
              </>
            )}
          </Box>
        )}
      </Box>
      <Box>
        {productos && productos.length > 0 && (
          <getAllProducts
            style={{
              marginTop: "10px",
              marginBottom: "20px",
              marginRight: "20px",
              marginLeft: "20px",
            }}
            productos={productos}
          />
        )}
      </Box>
    </Box>
  );
}
