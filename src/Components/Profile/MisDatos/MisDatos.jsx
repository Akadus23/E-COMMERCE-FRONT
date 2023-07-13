import React, { useEffect } from "react";
import { Typography, Button, Box, TextField, } from '@mui/material';
import { useState } from 'react';
import { useAuth0 } from "@auth0/auth0-react";
import { useDispatch, useSelector } from "react-redux";
import { actualizarUsuario } from "../../../Redux/actions";



export default function MisDatos() {

  //const { user } = useAuth0();

  const dispatch = useDispatch();

  const [isEditing, setIsEditing] = useState(false);
  
   const{user} = useAuth0();
  const [password, setPassword] = useState('***********');
  const [address, setAddress] = useState('Calle falsa 123');
  const [phone, setPhone] = useState('1234567890');
   const usuario = useSelector((state) => state.usuarioDetail)
  const id = usuario.id;
  

  const initialState = {
    nombre: usuario.nombre,
    direccion: usuario.addres ? usuario.addres : "",
    telefono: usuario.tel ? usuario.tel : 0,
    contraseña: "",
    fecha: usuario.fecha ? usuario.fecha : "",
  }

  const [datos, setDatos] = useState(initialState);
  


  const handleEditClick = () => {
    setIsEditing(true);
  };

  

  function handleSaveClick(e){
    e.preventDefault();
    setIsEditing(false);
    // Aquí puedes agregar la lógica para guardar la contraseña editada
    // Puedes usar el estado para obtener el nuevo valor del campo de contraseña

    dispatch(actualizarUsuario(id, datos))
  };

  const handleCancelClick = () => {
    setIsEditing(false);
    // Aquí puedes agregar la lógica para cancelar la edición
    // Puedes usar el estado para restaurar el valor original del campo de contraseña
    setDatos(initialState)
    
  };

  
  function handleChange(e) {
    setDatos({
      ...datos,
      [e.target.name]: e.target.value
    })
  }


  return (
    <Box>
      <Typography
        variant="h1"
        fontSize="2rem"
        sx={{
          backgroundColor: 'black',
          color: 'red',
          padding: '10px',
          borderRadius: '4px',
          display: 'inline-block',
        }}
      >
        Datos de cuenta
      </Typography>
      {isEditing ? (
          <>
            <Button
              style={{ color: "red", marginLeft: "15px" }}
              onClick={handleSaveClick}
            >
              Guardar
            </Button>
            <Button
              style={{ color: "red", marginLeft: "10px" }}
              onClick={handleCancelClick}
            >
              Cancelar
            </Button>
          </>
        ) : (
          <Button
            style={{ color: "red", marginLeft: "15px" }}
            onClick={handleEditClick}
          >
            Editar
          </Button>
        )}

      <Box>
        <Box>
          <Typography variant="h2" fontSize="1.5rem" sx={{ mt: 3, }}>
            Usuario
            {/* <Button style={{ color: "red", marginLeft: "30px" }}>editar</Button> */}
          </Typography>
          <TextField
            type="text"
            variant="outlined"
            size="small"
          defaultValue={user.name}

            sx={{ width: "400px"}}
            onChange={(e) => handleChange(e)}
            name="nombre"
          
            disabled={!isEditing}
          />

        </Box>
        <Box>
          <Typography variant="h2" fontSize="1.5rem" sx={{ mt: 3, }}>
            Email
            {/* <Button style={{ color: "red", marginLeft: "30px" }}>editar</Button> */}
          </Typography>
          <TextField
            variant="outlined"
            size="small"
          defaultValue={user.email}

            disabled
            sx={{ width: "400px", mt: 1, }}
          />

        </Box>
      </Box>
      <Typography
          variant="h1"
          fontSize="2rem"
          sx={{
            backgroundColor: 'black',
            color: 'red',
            padding: '10px',
            borderRadius: '4px',
            display: 'inline-block',
            mt: 5,
          }}
        >
          Datos personales
        </Typography>

      <Box>
        {/* <Box>
          <Typography variant="h2" fontSize="1.5rem">
            Nombre y Apellido{" "}
            <Button style={{ color: "red", marginLeft: "30px" }}>editar</Button>
          </Typography>
          <Typography variant="body1" fontSize="1rem">Nombre Completo</Typography>
        </Box> */}
        
        <Box>
      <Typography variant="h2" fontSize="1.5rem" sx={{ mt: 3 }}>
        Dirección
      </Typography>
      <TextField
      type="text"
        variant="outlined"
        size="small"
        defaultValue={usuario.direccion}
        onChange={(e) => handleChange(e)}
        name="direccion"
        fullWidth
        disabled={!isEditing}
      />
    </Box>
        <Box>
      <Typography variant="h2" fontSize="1.5rem" sx={{ mt: 3 }}>
        Teléfono
        {/* {isEditing ? (
          <>
            <Button
              style={{ color: "red", marginLeft: "30px" }}
              onClick={handleSaveClick}
            >
              Guardar
            </Button>
            <Button
              style={{ color: "red", marginLeft: "10px" }}
              onClick={handleCancelClick}
            >
              Cancelar
            </Button>
          </>
        ) : (
          <Button
            style={{ color: "red", marginLeft: "30px" }}
            onClick={handleEditClick}
          >
            Editar
          </Button>
        )} */}
      </Typography>
      <TextField
        type="number"
        variant="outlined"
        size="small"
        defaultValue={usuario.telefono}
        onChange={(e) => handleChange(e)}
        name="telefono"
        fullWidth
        disabled={!isEditing}
      />
    </Box>
        
      </Box>
      

    </Box>
  );
  

}

