import React, {} from 'react'
import { Formik, FieldArray, Field } from "formik";
import {TextField, Button, Grid } from '@mui/material';
import * as Yup from 'yup';


//Aqui se renderiza el formulario para crear un nuevo producto

export default function FormModProd(name, image, stock, description, price, colors) {

const requiredString = Yup.string().required("Campo requerido");

const regexImg = /\.(jpg|jpeg|png|gif|bmp)$/;
const initialValues = {
      name: name,
      image: image,
      stock: stock,
      description: description,
      price: price,
      colors: colors
}

  return (
  <><Grid
  container
  direction="column"
  justifyContent="center"
  alignItems="center">
    <h2>Crear Producto</h2>
    <Formik 
    initialValues={initialValues}

    validationSchema={Yup.object().shape({
      name: requiredString.min(1, "Debes ingresar al menos 1 caracter"),
      image: requiredString.matches(regexImg, 'La ruta debe ser una imagen válida (jpg, jpeg, png, gif, bmp)'),
      stock: Yup.number()
              .integer("Ingresa un número entero")
              .positive("El stock debe ser mayor a cero")
              .required("Campo requerido"),
      description: requiredString,
      price:  Yup.number()
              .integer("Ingresa un número entero")
              .positive("El precio debe ser mayor a cero")
              .required("Campo requerido"),
      colors: Yup.array().min(1, "Debe haber al menos un color añadido")
  })}

    onSubmit={(values, {resetForm})=>{
      alert(JSON.stringify(values))
      resetForm();
    }}>

    {({handleSubmit, handleChange, values, errors, touched})=>(
      <form onSubmit={handleSubmit}>
        <Grid
         container
         direction="column"
         justifyContent="center"
         alignItems="center"
         rowSpacing = {2}>

          <Grid item>
          <TextField 
            id="name"
            name="name"
            label="Nombre producto:"
            placeHolder="Producto nuevo"
            value={values.name}
            onChange={handleChange}
            error={touched.name && Boolean(errors.name)}
            helperText={touched.name && errors.name}
            />
          </Grid>     

          <Grid item>
        <TextField
          id="image"
          name="image"
          label="Ruta Imagen Producto:"
          placeHolder="jpg, jpeg, png, gif, bmp"
          value={values.image}
          onChange={handleChange}
          error={touched.image && Boolean(errors.image)}
          helperText={touched.image && errors.image}
          />
        </Grid>

        <Grid item>
          <TextField
            id="stock"
            name="stock"
            type="number"
            label='Cantidad de producto: '
            placeHolder="0"
            value={values.stock}
            onChange={handleChange}
            error={touched.stock && Boolean(errors.stock)}
            helperText={touched.stock && errors.stock}
            />
         </Grid> 

          <Grid item>
            <TextField
              id="outlined-multiline-flexible"
            name="description"
            label='Descripción:'
            placeHolder="Escribe la descripción de tu producto"
            multiline
            maxRows={4}
            value={values.description}
            onChange={handleChange}
            error={touched.description && Boolean(errors.description)}
            helperText={touched.description && errors.description}
            />
          </Grid> 

           <Grid item>
            <TextField
            id='price'
            name="price"
            type="number"
            label='Precio unitario: '
            placeHolder="0"
            value={values.price}
            onChange={handleChange}
            error={touched.price && Boolean(errors.price)}
            helperText={touched.price && errors.price}
            />
          </Grid>
          <Grid item>
            <FieldArray name="colors">
                    {({ push, remove, form }) => (
                      <div>
                        {form.values.colors.map((color, index) => (
                          <div key={index}>
                            <Field name={`colors[${index}]`} />
                            <Button sx={{color: '#ff6e40'}} type="button" onClick={() => remove(index)}>
                              Eliminar
                            </Button>
                          </div>
                        ))}
                        <Button sx={{color: '#ff6e40', borderBlockColor: '#ff6e40'}}variant='outlined' type="button" onClick={() => push('')}>
                          Agregar Color
                        </Button>
                      </div>
                    )}
                  </FieldArray>
                    
                  <div className='error'>{errors.colors}</div>                    
                </Grid>         
                <Button sx={{backgroundColor: '#ff8a65',}} variant='contained' type="submit">Enviar</Button>
                </Grid>
      </form>
    )}  
    </Formik>
    </Grid>
  </>
)
}