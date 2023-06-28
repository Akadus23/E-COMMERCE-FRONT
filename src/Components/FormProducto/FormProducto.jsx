import React, {} from 'react'
import { Formik, FieldArray, Field } from "formik";
import {TextField, Button, Grid } from '@mui/material';
import * as Yup from 'yup';
import axios from 'axios'


//Aqui se renderiza el formulario para crear un nuevo producto

export default function FormProducto() {

const requiredString = Yup.string().required("Campo requerido");

const regexImg = /\.(jpg|jpeg|png|gif|bmp)$/;
const initialValues = {
      nombreproducto: "",
      fotoprinc: "",
      disponibproducto: "",
      descproducto: "",
      precioproducto: "",
      colorproducto: [],
      categori: ""
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
      nombreproducto: requiredString.min(1, "Debes ingresar al menos 1 caracter"),
      fotoprinc: requiredString.matches(regexImg, 'La ruta debe ser una imagen válida (jpg, jpeg, png, gif, bmp)'),
      disponibproducto: Yup.number()
              .integer("Ingresa un número entero")
              .positive("El stock debe ser mayor a cero")
              .required("Campo requerido"),
      descproducto: requiredString,
      precioproducto:  Yup.number()
              .integer("Ingresa un número entero")
              .positive("El precio debe ser mayor a cero")
              .required("Campo requerido"),
      colorproducto: Yup.array().min(1, "Debe haber al menos un color añadido"),
      categori: requiredString.min(1, "Debes ingresar al menos 1 caracter")
  })}

    onSubmit={async (values, {resetForm})=>{
      var confirmar = window.confirm('Se enviará'+JSON.stringify(values))
      if(confirmar){
        try{
        await axios.post('http://localhost:3001/productos/productos', values)
        alert("Receta creada");
        }catch(err){
          alert(err.message)
        }
      }
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
            id="nombreproducto"
            name="nombreproducto"
            label="Nombre producto:"
            placeHolder="Producto nuevo"
            value={values.nombreproducto}
            onChange={handleChange}
            error={touched.nombreproducto && Boolean(errors.nombreproducto)}
            helperText={touched.nombreproducto && errors.nombreproducto}
            />
          </Grid>     

          <Grid item>
        <TextField
          id="fotoprinc"
          name="fotoprinc"
          label="Ruta Imagen Producto:"
          placeHolder="jpg, jpeg, png, gif, bmp"
          value={values.fotoprinc}
          onChange={handleChange}
          error={touched.fotoprinc && Boolean(errors.fotoprinc)}
          helperText={touched.fotoprinc && errors.fotoprinc}
          />
        </Grid>

        <Grid item>
          <TextField
            id="disponibproducto"
            name="disponibproducto"
            type="number"
            label='Cantidad de producto: '
            placeHolder="0"
            value={values.disponibproducto}
            onChange={handleChange}
            error={touched.disponibproducto && Boolean(errors.disponibproducto)}
            helperText={touched.disponibproducto && errors.disponibproducto}
            />
         </Grid> 

          <Grid item>
            <TextField
              id="outlined-multiline-flexible"
            name="descproducto"
            label='Descripción:'
            placeHolder="Escribe la descripción de tu producto"
            multiline
            maxRows={4}
            value={values.descproducto}
            onChange={handleChange}
            error={touched.descproducto && Boolean(errors.descproducto)}
            helperText={touched.descproducto && errors.descproducto}
            />
          </Grid> 

           <Grid item>
            <TextField
            id='precioproducto'
            name="precioproducto"
            type="number"
            label='Precio unitario: '
            placeHolder="0"
            value={values.precioproducto}
            onChange={handleChange}
            error={touched.precioproducto && Boolean(errors.precioproducto)}
            helperText={touched.precioproducto && errors.precioproducto}
            />
          </Grid>

          <Grid item>
          <TextField 
            id="categori"
            name="categori"
            label="Categoría:"
            value={values.categori}
            onChange={handleChange}
            error={touched.categori && Boolean(errors.categori)}
            helperText={touched.categori && errors.categori}
            />
          </Grid>

          <Grid item>
            <FieldArray name="colorproducto">
                    {({ push, remove, form }) => (
                      <div>
                        {form.values.colorproducto.map((color, index) => (
                          <div key={index}>
                            <Field name={`colorproducto[${index}]`} />
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
                    
                  {errors.colorproducto ? <div className='error'>{errors.colorproducto}</div>: null}                    
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