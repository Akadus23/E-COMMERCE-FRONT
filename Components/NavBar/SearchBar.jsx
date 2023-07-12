import * as React from "react";
import { Button, Container, FormControl, OutlinedInput } from "@mui/material";
import { useDispatch } from "react-redux";
import { buscarProducto, getDetail } from "../../Redux/actions";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux/es/hooks/useSelector";

export default function SearchBar() {
  const [producto, setProducto] = React.useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate()

  const {productoBuscado} = useSelector((state)=>state)  
  function handleChange(e) {
    setProducto(e.target.value);
  }

  function handleClick(e) {
    if(producto===""){

    }else{
    dispatch(buscarProducto(1, producto))
    navigate(`/busqueda/${producto}`)
    dispatch(getDetail(1))
    }
  }

  return (
    <Container
      sx={{
        mt: 1,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        ml: -4,
        width: '90%'
      }}
    >
      <FormControl sx={{ width: "500px" }}>
        <OutlinedInput
          placeholder="Producto"
          value={producto}
          onChange={handleChange}
          sx={{
            height: "50px",
            justifyContent: "center",
            alignItems: "center",
            margin: 1,
          }}
        />
      </FormControl>
      <Button
        variant="contained"
        onClick={handleClick}
        sx={{
          width: "100px",
          height: "45px",
          mt: 0,
          ml: 2,
          justifyContent: "space-evenly",
          color: "white",
          backgroundColor: "black", // Modificar el color de fondo aquí
        }}
      >
        Buscar
      </Button>
    </Container>
  );
}
