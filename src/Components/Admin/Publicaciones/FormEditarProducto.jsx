import React, { useRef, useState, useEffect } from "react";
import { Formik, FieldArray, Field } from "formik";
import { TextField, Button, Grid } from "@mui/material";
import { CloudinaryContext, Image, Transformation } from "cloudinary-react";
import * as Yup from "yup";
import axios from "axios";
import s from "./FormEditarProducto.module.css";
import { useSelector, useDispatch } from 'react-redux';
import { getAllProducts } from '../../../Redux/actions';


export default function FormEditarProducto({ productoId }) {
  const fileRef = useRef(null);
  const cloudName = "dmjkjz1oa";

  const requiredString = Yup.string().required("Campo requerido");

  const [producto, setProducto] = useState(null);
  const [urlImagen, setUrlImagen] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllProducts(1));
  }, [dispatch]);

  const { allProducts } = useSelector((state) => ({
    allProducts: state.allProducts,
  }));

  useEffect(() => {
    const producto = allProducts.find((producto) => producto.id === productoId);
    setProducto(producto);
  }, [allProducts, productoId]);

  const handleImageUpload = async (file) => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "shoppie");

    try {
      const response = await axios.post(
        `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`,
        formData
      );
      setUrlImagen(response.data.url);
      alert("Imagen cargada");
    } catch (error) {
      alert(error.message);
    }
  };

  if (!producto) {
    return console.log(productoId);
  }

  return (
    <div className={s.container}>
      <h2>Editar Producto</h2>
      <Formik
        initialValues={{
          nombreproducto: producto.nombreproducto,
          fotoprinc: "",
          disponibproducto: producto.disponibproducto,
          descproducto: producto.descproducto,
          precioproducto: producto.precioproducto,
          colorproducto: producto.colorproducto,
          nombrecat: producto.nombrecat,
        }}
        validationSchema={Yup.object().shape({
          nombreproducto: requiredString.min(1, "Debes ingresar al menos 1 caracter"),
          disponibproducto: Yup.number()
            .integer("Ingresa un número entero")
            .positive("El stock debe ser mayor a cero")
            .required("Campo requerido"),
          descproducto: requiredString,
          precioproducto: Yup.number()
            .integer("Ingresa un número entero")
            .positive("El precio debe ser mayor a cero")
            .required("Campo requerido"),
          colorproducto: Yup.array().min(1, "Debe haber al menos un color añadido"),
          nombrecat: requiredString.min(1, "Debes ingresar al menos 1 caracter"),
        })}
        onSubmit={async (values) => {
          try {
            const updatedProducto = {
              ...producto,
              nombreproducto: values.nombreproducto,
              disponibproducto: values.disponibproducto,
              descproducto: values.descproducto,
              precioproducto: values.precioproducto,
              colorproducto: values.colorproducto,
              nombrecat: values.nombrecat,
            };

            await axios.put(`https://commerce-back-2025.up.railway.app/productos/${producto.id}`, updatedProducto);
            alert("Producto actualizado correctamente");
          } catch (error) {
            console.error(error);
            alert("Hubo un error al actualizar el producto");
          }
        }}
      >
        {({ handleSubmit, handleChange, values, errors, touched, setFieldValue }) => (
          <form onSubmit={handleSubmit}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  name="nombreproducto"
                  label="Nombre producto"
                  value={values.nombreproducto}
                  onChange={handleChange}
                  error={touched.nombreproducto && Boolean(errors.nombreproducto)}
                  helperText={touched.nombreproducto && errors.nombreproducto}
                  fullWidth
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  name="disponibproducto"
                  label="Cantidad de producto"
                  type="number"
                  value={values.disponibproducto}
                  onChange={handleChange}
                  error={touched.disponibproducto && Boolean(errors.disponibproducto)}
                  helperText={touched.disponibproducto && errors.disponibproducto}
                  fullWidth
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  name="descproducto"
                  label="Descripción"
                  value={values.descproducto}
                  onChange={handleChange}
                  error={touched.descproducto && Boolean(errors.descproducto)}
                  helperText={touched.descproducto && errors.descproducto}
                  fullWidth
                  multiline
                  rows={4}
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  name="precioproducto"
                  label="Precio unitario"
                  type="number"
                  value={values.precioproducto}
                  onChange={handleChange}
                  error={touched.precioproducto && Boolean(errors.precioproducto)}
                  helperText={touched.precioproducto && errors.precioproducto}
                  fullWidth
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12}>
                <FieldArray name="colorproducto">
                  {({ push, remove }) => (
                    <div>
                      {values.colorproducto.map((color, index) => (
                        <div key={index}>
                          <TextField
                            name={`colorproducto[${index}]`}
                            label={`Color ${index + 1}`}
                            value={color}
                            onChange={handleChange}
                            fullWidth
                            variant="outlined"
                          />
                          {index > 0 && (
                            <Button
                              type="button"
                              onClick={() => remove(index)}
                              variant="outlined"
                            >
                              Eliminar Color
                            </Button>
                          )}
                        </div>
                      ))}
                      <Button
                        type="button"
                        onClick={() => push("")}
                        variant="outlined"
                      >
                        Agregar Color
                      </Button>
                    </div>
                  )}
                </FieldArray>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  name="nombrecat"
                  label="Categoría"
                  value={values.nombrecat}
                  onChange={handleChange}
                  error={touched.nombrecat && Boolean(errors.nombrecat)}
                  helperText={touched.nombrecat && errors.nombrecat}
                  fullWidth
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  type="file"
                  inputRef={fileRef}
                  onChange={(e) => {
                    setFieldValue("fotoprinc", e.target.files[0]);
                  }}
                  variant="outlined"
                />
                {values.fotoprinc && (
                  <div>
                    <Image
                      cloudName={cloudName}
                      publicId={producto.fotoprinc}
                    >
                      <Transformation width="200" crop="scale" />
                    </Image>
                  </div>
                )}
                <Button
                  type="button"
                  onClick={() => handleImageUpload(values.fotoprinc)}
                  variant="outlined"
                >
                  Cargar Imagen
                </Button>
              </Grid>
              <Grid item xs={12}>
                <Button type="submit" variant="contained" color="primary">
                  Guardar
                </Button>
              </Grid>
            </Grid>
          </form>
        )}
      </Formik>
    </div>
  );
}
