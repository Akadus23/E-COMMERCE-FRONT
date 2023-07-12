import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Box, Button, Container, Grid, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography, Pagination, IconButton } from '@mui/material';
import { getAllProducts } from '../../../Redux/actions';
import EditIcon from '@mui/icons-material/Edit';
import { useNavigate, Link } from 'react-router-dom'; 

export default function Publicaciones() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(getAllProducts(1));
  }, [dispatch]);

  function handleChangePagina(e, value) {
    dispatch(getAllProducts(value));
  }
  
  const { allProducts, paginas } = useSelector((state) => ({
    allProducts: state.allProducts,
    paginas: state.paginas,
  }));
  
  const productos2 = allProducts;

  const [productosMostrados, setProductosMostrados] = useState(3);
  const mostrarMasProductos = () => {
    setProductosMostrados((prevProductosMostrados) => prevProductosMostrados + 3);
  };

  const handleEditarProducto = (id) => {
    // Redirige al formulario de edición con el ID del producto como parámetro en la URL
    navigate(`/editar-producto/${id}`);
  }

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
      }}
    >
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Nombre</TableCell>
              <TableCell>Stock</TableCell>
              <TableCell>Precio</TableCell>
              <TableCell>Editar</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {productos2?.slice(0, productosMostrados).map((producto) => (
              <TableRow key={producto.id}>
                <TableCell>{producto.nombreproducto}</TableCell>
                <TableCell>{producto.disponibproducto}</TableCell>
                <TableCell>{producto.precioproducto}</TableCell>
                <TableCell>
                  <IconButton component={Link} to={`/editar-producto/${producto.id}`} onClick={() => handleEditarProducto(producto.id)}>
                    <EditIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Button variant="contained" onClick={mostrarMasProductos}>
        Mostrar más
      </Button>

      <Pagination count={paginas} showFirstButton showLastButton onChange={handleChangePagina} />
    </Box>
  );
}
