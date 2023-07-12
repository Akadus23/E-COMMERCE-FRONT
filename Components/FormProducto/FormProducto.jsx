import React, { useRef, useState } from "react";
import { Formik, FieldArray, Field } from "formik";
import { TextField, Button, Grid, Input } from "@mui/material";
import { CloudinaryContext, Image, Transformation } from "cloudinary-react";
import { Cloudinary } from "@cloudinary/url-gen";
import * as Yup from "yup";
import axios from "axios";
import s from "./FormProducto.module.css";
import { useAuth0 } from "@auth0/auth0-react";

//Aqui se renderiza el formulario para crear un nuevo producto

export default function FormProducto() {

  const { isAuthenticated, loginWithRedirect } = useAuth0();

  const fileRef = useRef(null);
  const cloudName = "dmjkjz1oa";

  const requiredString = Yup.string().required("Campo requerido");

  const regexImg = /\.(jpg|jpeg|png|gif|bmp)$/;
  const initialValues = {
    nombreproducto: "",
    fotoprinc: "",
    disponibproducto: "",
    descproducto: "",
    precioproducto: "",
    colorproducto: [],
    nombrecat: "",
  };

  const [urlImagen, setUrlImagen] = useState("vacio");

  const handleImageUpload = async (file) => {
    const formData = new FormData();
    console.log("antes del append");
    formData.append("file", file);
    formData.append("upload_preset", "shoppie"); // Reemplaza 'tu_upload_preset' por tu propio valor
    try {
      console.log("form data:", formData);
      const response = await axios.post(
        `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`,
        formData
      );
      console.log("response data:", response.data);
      console.log(response.data.url);
      setUrlImagen(response.data.url);
      console.log(urlImagen);
      alert("Imagen cargada");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <>
      {isAuthenticated ? 
      <div className={s.fondo}>
        <div className={s.cajaInterna}>
          <Grid
            container
            direction="column"
            justifyContent="center"
            alignItems="center"
            >
            <h2 className={s.crearProducto}>Crear Producto</h2>
            <Formik
              initialValues={initialValues}
              validationSchema={Yup.object().shape({
                nombreproducto: requiredString.min(
                  1,
                  "Debes ingresar al menos 1 caracter"
                  ),
                fotoprinc: Yup.mixed()
                .nullable()
                .required()
                .test(
                  "FILE_FORMAT",
                  "El archivo debe ser una imagen",
                  (value) => {
                      return value && value.type.startsWith("image/");
                    }
                    ),
                    disponibproducto: Yup.number()
                    .integer("Ingresa un número entero")
                    .positive("El stock debe ser mayor a cero")
                    .required("Campo requerido"),
                    descproducto: requiredString,
                    precioproducto: Yup.number()
                    .integer("Ingresa un número entero")
                    .positive("El precio debe ser mayor a cero")
                    .required("Campo requerido"),
                    colorproducto: Yup.array().min(
                      1,
                      "Debe haber al menos un color añadido"
                      ),
                      nombrecat: requiredString.min(
                        1,
                        "Debes ingresar al menos 1 caracter"
                ),
              })}
              onSubmit={async (values, { resetForm }) => {
                if (urlImagen === "vacio") alert("No ha cargado la imagen ");
                else {
                  var body = {
                    nombreproducto: values.nombreproducto,
                    fotoprinc: urlImagen,
                    disponibproducto: values.disponibproducto,
                    descproducto: values.descproducto,
                    precioproducto: values.precioproducto,
                    colorproducto: values.colorproducto,
                    nombrecat: values.nombrecat,
                  };
                  var confirmar = window.confirm(
                    "Se enviará" + JSON.stringify(body)
                    );
                    if (confirmar) {
                      try {
                        await axios.post(
                        "/productoCrear",
                        body
                        );
                        // const response = await fetch('https://commerce-back-2025.up.railway.app/productoCrear', {
                          //   method: "POST",
                          //   body: body
                          // })
                      alert("Producto creado");
                      resetForm();
                    } catch (err) {
                      alert(err.message);
                    }
                  }
                }
              }}
              >
              {({
                handleSubmit,
                handleChange,
                values,
                errors,
                touched,
                setFieldValue,
              }) => (
                <form onSubmit={handleSubmit}>
                  <Grid
                    container
                    justifyContent="center"
                    alignItems="center"
                    rowSpacing={3}
                  >
                    {/* ############### NOMBRE DEL PRODUCTO ############*/}
                    <div className={s.nombre}>
                      <h1>Completá el título de la publicación</h1>
                      <p>
                        Incluí solo producto, marca, modelo y sus
                        características principales. Tené en cuenta que cuando
                        recibas una venta, no podrás editarlo.
                      </p>
                      <Grid item>
                        <div className={s.input}>
                          <TextField
                            id="nombreproducto"
                            name="nombreproducto"
                            label="Nombre producto:"
                            placeHolder="Producto nuevo"
                            value={values.nombreproducto}
                            onChange={handleChange}
                            error={
                              touched.nombreproducto &&
                              Boolean(errors.nombreproducto)
                            }
                            helperText={
                              touched.nombreproducto && errors.nombreproducto
                            }
                            style={{
                              width: "93%",
                              marginLeft: "30px",
                              background: "white",
                            }}
                          />
                        </div>
                      </Grid>
                    </div>
                    {/* ############### AGREGAR FOTO / IMAGEN ############*/}
                    <div className={s.imagenes}>
                      <h1>Agrega una imagen a tu producto</h1>
                      <p>
                        Para no perder exposición, asegurate de que la primera
                        foto tenga fondo blanco puro creado con un editor de
                        fotos. Más consejos. No incluyas datos de contacto,
                        links ni referencias a sitios externos.
                      </p>
                      <Grid item>
                        <TextField
                          name="fotoprinc"
                          type="file"
                          ref={fileRef}
                          onChange={(e) => {
                            setFieldValue("fotoprinc", e.target.files[0]);
                          }}
                          error={touched.fotoprinc && Boolean(errors.fotoprinc)}
                          helperText={touched.fotoprinc && errors.fotoprinc}
                          style={{
                            width: "100%",
                            background: "white",
                          }}
                        />

                        {/* <input type="file" onChange={(e) => setImage(e.target.files[0])} /> */}
                        {values.fotoprinc && (
                          <div>
                            <Image
                              hidden
                              cloudName={cloudName}
                              publicId={values.fotoprinc.name}
                              />
                          </div>
                        )}
                        <Button
                          variant="outlined"
                          size="small"
                          sx={{ color: "#ff6e40", borderBlockColor: "#ff6e40" }}
                          onClick={() => handleImageUpload(values.fotoprinc)}
                          style={{
                            marginTop: "20px",
                          }}
                        >
                          Cargar Imagen{" "}
                        </Button>
                        {/* <button onClick={() => handleImageUpload(image)}>Subir imagen</button> */}
                      </Grid>
                    </div>
                    <div className={s.caja2}>
                      {/* ############### CANTIDAD ############*/}
                      <div className={s.cantidad}>
                        <h1>Cantidad</h1>
                        <Grid item>
                          <TextField
                            id="disponibproducto"
                            name="disponibproducto"
                            type="number"
                            label="Cantidad de producto: "
                            placeHolder="0"
                            value={values.disponibproducto}
                            onChange={handleChange}
                            error={
                              touched.disponibproducto &&
                              Boolean(errors.disponibproducto)
                            }
                            helperText={
                              touched.disponibproducto &&
                              errors.disponibproducto
                            }
                            style={{
                              width: "100%",
                              background: "white",
                            }}
                          />
                        </Grid>
                      </div>
                      {/* ############### CATEGORIA ############*/}
                      <div className={s.categoria}>
                        <h1>Categoria</h1>
                        <Grid item>
                          <TextField
                            id="nombrecat"
                            name="nombrecat"
                            label="Categoría:"
                            value={values.nombrecat}
                            onChange={handleChange}
                            error={
                              touched.nombrecat && Boolean(errors.nombrecat)
                            }
                            style={{
                              width: "100%",
                              background: "white",
                            }}
                            helperText={touched.nombrecat && errors.nombrecat}
                          />
                        </Grid>
                      </div>
                    </div>
                    {/* ############### DESCRIPCION ############*/}
                    <div className={s.descripcion}>
                      <h1>Tu producto debe tener una descripcion</h1>
                      <p>
                        No incluyas datos de contacto. No uses este espacio para
                        indicar la condición de tu producto. Tiene que tener
                        todas las caracteristicas que compone tu producto para
                        mantener al usuario bien informado.
                      </p>
                      <Grid item>
                        <TextField
                          id="outlined-multiline-flexible"
                          name="descproducto"
                          label="Descripción:"
                          placeHolder="Escribe la descripción de tu producto"
                          multiline
                          maxRows={4}
                          value={values.descproducto}
                          onChange={handleChange}
                          error={
                            touched.descproducto && Boolean(errors.descproducto)
                          }
                          helperText={
                            touched.descproducto && errors.descproducto
                          }
                          style={{
                            width: "100%",
                            background: "white",
                          }}
                          />
                      </Grid>
                    </div>

                    {/* ############### COLORES ############*/}
                    <div className={s.colores}>
                      <h1>Elige un o mas colores</h1>
                      <Grid item>
                        <FieldArray name="colorproducto">
                          {({ push, remove, form }) => (
                            <div>
                              {form.values.colorproducto.map((color, index) => (
                                <div key={index}>
                                  <Field name={`colorproducto[${index}]`} />
                                  <Button
                                    sx={{ color: "#ff6e40" }}
                                    type="button"
                                    onClick={() => remove(index)}
                                  >
                                    Eliminar
                                  </Button>
                                </div>
                              ))}
                              <Button
                                sx={{
                                  color: "#ff6e40",
                                  borderBlockColor: "#ff6e40",
                                }}
                                variant="outlined"
                                type="button"
                                onClick={() => push("")}
                              >
                                Agregar Color
                              </Button>
                            </div>
                          )}
                        </FieldArray>

                        {errors.colorproducto ? (
                          <div className="error">{errors.colorproducto}</div>
                        ) : null}
                      </Grid>
                    </div>

                    <div className={s.caja3}>
                      {/* ############### PRECIO ############*/}
                      <div className={s.precio}>
                        <h1>¿Cuál es el precio?</h1>
                        <Grid item>
                          <TextField
                            id="precioproducto"
                            name="precioproducto"
                            type="number"
                            label="Precio unitario: "
                            placeHolder="0"
                            value={values.precioproducto}
                            onChange={handleChange}
                            error={
                              touched.precioproducto &&
                              Boolean(errors.precioproducto)
                            }
                            helperText={
                              touched.precioproducto && errors.precioproducto
                            }
                            style={{
                              width: "100%",
                              background: "white",
                            }}
                            />
                        </Grid>
                      </div>
                      {/* ############### CREAR PUBLICACION ############*/}
                      <div className={s.enviar}>
                        <Button
                          variant="contained"
                          type="submit"
                          className={s.sumit}
                          style={{
                            width: "60%",
                          }}
                          >
                          Crear Publicacion
                        </Button>
                      </div>
                    </div>
                  </Grid>
                </form>
              )}
            </Formik>
          </Grid>
        </div>
      </div>
    : loginWithRedirect()
    }
    </>
  );
}
