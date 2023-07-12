import React, { useState } from "react";
import {
  TextField,
  Button,
  Container,
  Typography,
  Grid,
  useMediaQuery,
} from "@mui/material";
import { validacionesContacto } from "./validaciones";
import { styled } from "@mui/system";
import s from "./Contacto.module.css";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import HMobiledataIcon from "@mui/icons-material/HMobiledata";

// ################# Aqui sera el formulario de contacto #################

const Contacto = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({});

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const validationErrors = validacionesContacto(name, email, message);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      // Lógica para enviar el formulario si no hay errores de validación
      console.log("Name:", name);
      console.log("Email:", email);
      console.log("Message:", message);
      // Resetear los campos del formulario
      setName("");
      setEmail("");
      setMessage("");
      setErrors({});
    }
  };

  const StyledContainer = styled(Container)(({ theme }) => ({
    justifyContent: "center",
    display: "flex",
    alignItems: "center",
    height: "60%",
    width: "40%",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
    mt: 20,
    borderRadius: "3%",
    background: "linear-gradient(to right, #c5e1a5, #f0f4c3)",
  }));

  return (
    <Grid
      container
      sx={{
        mt: -0.9,
        height: "580px",
        width: "100%",
        background: "red",
      }}
    >
      <div className={s.caja1}>
        <div className={s.caja3}>
          <h1>Redes Sociales</h1>
          <p>
            Puedes ponerte en contacto en las siguientes redes sociales, ademas
            puedes seguirnos para no perderte de cada informacion sobre
            nosotros.
          </p>
          <div className={s.cajaIcono}>
            <a href="">
              <div className={s.icono1}>
                <FacebookIcon></FacebookIcon>
              </div>
            </a>
            <a href="">
              <div className={s.icono2}>
                <TwitterIcon></TwitterIcon>
              </div>
            </a>
            <a href="">
              <div className={s.icono3}>
                <InstagramIcon></InstagramIcon>
              </div>
            </a>
            <a href="">
              <div className={s.icono4}>H</div>
            </a>
          </div>
        </div>
      </div>
      <form onSubmit={handleSubmit} className={s.caja2}>
        <Typography
          variant="h4"
          sx={{
            display: "flex",
            alignItems: "center",
            mb: 5,
            fontWeight: "bold",
            mt: 1,
          }}
        >
          CONTÁCTENOS
        </Typography>
        {/* ############ NOMBRE ############ */}
        <TextField
          label="Nombre"
          variant="outlined"
          value={name}
          onChange={handleNameChange}
          fullWidth
          margin="normal"
          error={errors.name !== undefined}
          helperText={errors.name}
          size="small"
          sx={{ marginBottom: 2 }}
        />
        {/* ############ EMAIL ############ */}
        <TextField
          label="Email"
          variant="outlined"
          value={email}
          onChange={handleEmailChange}
          fullWidth
          margin="normal"
          error={errors.email !== undefined}
          helperText={errors.email}
          size="small"
          sx={{ marginBottom: 2 }}
        />
        {/* ############ MENSAJE ############ */}
        <TextField
          label="Mensaje"
          variant="outlined"
          multiline
          rows={4}
          value={message}
          onChange={handleMessageChange}
          fullWidth
          margin="normal"
          error={errors.message !== undefined}
          helperText={errors.message}
          size="small"
          sx={{ marginBottom: 2 }}
        />
        <Button
          item
          xs={12}
          sm={6}
          md={6}
          lg={6}
          variant="contained"
          color="primary"
          type="submit"
          fullWidth
          style={{ background: "red" }}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "22%",
            ml: 81,
            mt: 1,
          }}
        >
          Enviar
        </Button>
      </form>
    </Grid>
  );
};

export default Contacto;
