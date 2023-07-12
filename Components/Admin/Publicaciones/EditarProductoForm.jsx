import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Box, Button, Container, TextField, Typography } from '@mui/material';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { editarProducto } from '../../../Redux/actions';
import { useNavigate } from 'react-router-dom';

export default function EditarProductoForm ({ productoId }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Obtener el producto actual del estado global
  const { allProducts, paginas } = useSelector((state) => ({
    allProducts: state.allProducts,
    paginas: state.paginas,
  }));

  const producto = allProducts.find((producto) => producto.id === productoId);

  // Schema de validación con Yup
  const validationSchema = Yup.object().shape({
    nombreproducto: Yup.string().required('Campo requerido'),
    descproducto: Yup.string().required('Campo requerido'),
    colorproducto: Yup.string().required('Campo requerido'),
    fotoprinc: Yup.string().required('Campo requerido'),
    precioproducto: Yup.number().required('Campo requerido'),
    disponibproducto: Yup.number().required('Campo requerido'),
  });

  // Función para manejar la edición del producto
  const handleEditarProducto = (values) => {
    const nuevoProducto = {
      id: productoId,
      ...values,
    };
    dispatch(editarProducto(productoId, nuevoProducto));
    navigate('/publicaciones');
  };
  

  // Estado para mostrar mensajes de éxito o error
  const [mensaje, setMensaje] = useState('');

  // Renderizar el formulario
  return (
    <Container maxWidth="sm">
      <Box mt={3}>
        <Typography variant="h4" component="h1" align="center">
          Editar Producto
        </Typography>
      </Box>
      <Box mt={3}>
        <Formik
          initialValues={{
            nombreproducto: producto?.nombreproducto ,
            descproducto: producto?.descproducto ,
            colorproducto: producto?.colorproducto ,
            fotoprinc: producto?.fotoprinc ,
            precioproducto: producto?.precioproducto,
            disponibproducto: producto?.disponibproducto ,
          }}
          validationSchema={validationSchema}
          onSubmit={handleEditarProducto}
        >
          <Form>
            <Box mb={2}>
              <Field
                name="nombreproducto"
                as={TextField}
                label="Nombre"
                fullWidth
              />
            </Box>
            <Box mb={2}>
              <Field
                name="descproducto"
                as={TextField}
                label="Descripción"
                fullWidth
              />
            </Box>
            <Box mb={2}>
              <Field
                name="colorproducto"
                as={TextField}
                label="Color"
                fullWidth
              />
            </Box>
            <Box mb={2}>
              <Field
                name="fotoprinc"
                as={TextField}
                label="Foto Principal"
                fullWidth
              />
            </Box>
            <Box mb={2}>
              <Field
                name="precioproducto"
                as={TextField}
                label="Precio"
                type="number"
                fullWidth
              />
            </Box>
            <Box mb={2}>
              <Field
                name="disponibproducto"
                as={TextField}
                label="Stock"
                type="number"
                fullWidth
              />
            </Box>
            <Button type="submit" variant="contained" color="primary" fullWidth>
              Guardar
            </Button>
            {mensaje && <Typography>{mensaje}</Typography>}
          </Form>
        </Formik>
      </Box>
    </Container>
  );
}
