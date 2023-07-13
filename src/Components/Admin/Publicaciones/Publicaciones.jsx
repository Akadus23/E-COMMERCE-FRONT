import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Box, Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Pagination, IconButton } from '@mui/material';
import { getAllProducts } from '../../../Redux/actions';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete'; // Importa el ícono Delete
import { Link } from 'react-router-dom';
import FormEditarProducto from './FormEditarProducto'; // Asegúrate de importar correctamente el componente
import axios from 'axios';

export default function Publicaciones() {
  const dispatch = useDispatch();

  const [productoId, setProductoId] = useState(null); // Definir el estado para el ID del producto

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
    setProductoId(id); // Establecer el ID del producto en el estado
  };

  const handleEliminarProducto = async (id) => {
    try {
      await axios.put(`https://commerce-back-2025.up.railway.app/producto/${id}`, { borrador: true });
      alert("Producto eliminado correctamente");
    } catch (error) {
      console.error(error);
      alert("Hubo un error al eliminar el producto");
    }
  };

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
              <TableCell>Eliminar</TableCell> {/* Nueva columna para el botón de eliminar */}
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
                <TableCell>
                  <IconButton onClick={() => handleEliminarProducto(producto.id)}>
                    <DeleteIcon />
                  </IconButton>
                </TableCell> {/* Botón de eliminar */}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Button variant="contained" onClick={mostrarMasProductos}>
        Mostrar más
      </Button>

      {productoId ? (
        <FormEditarProducto productoId={productoId} />
      ) : null}

      <Pagination count={paginas} showFirstButton showLastButton onChange={handleChangePagina} />
    </Box>
  );
}
