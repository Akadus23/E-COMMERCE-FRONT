import React, { useState, useEffect } from 'react';
import { Box, Button, Container, CardContent, CardHeader, Link, Typography, Avatar, Grid, Card, CardActions, IconButton, OutlinedInput, InputLabel, MenuItem, FormControl, FormControlLabel, Checkbox, Select, Chip, useTheme, Stack } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Favorite, FavoriteBorder } from '@mui/icons-material';
import {useSelector, useDispatch} from 'react-redux'
import { getAllProducts } from '../../Redux/actions';
import ContainerFiltros from './ContainerFiltros';
import CardP from './CardP';

const Home = () => {

  const [productosFiltrados, setProductosFiltrados] = useState([]); // Agrega esta línea para declarar el estado productos

  const dispatch = useDispatch();
  // Función que trae los productos del back al store de redux 
  useEffect(()=>{
    dispatch(getAllProducts())
  },[])
  
  //Traemos todos los productos del store local 
  const {allProducts} = useSelector((state)=>state)

  const [productosMostrados, setProductosMostrados] = useState(3);


  const productos2 = allProducts;


  const mostrarMasProductos = () => {
    setProductosMostrados((prevProductosMostrados) => prevProductosMostrados + 3);
  };

  
    
  return (
    <Grid
      container
      spacing={8}
      sx={{
        justifyContent: 'center',
        padding: '5%',
        width: {
          mobile: '99.5%',
          tablet: '99.5%',
          laptop: '99.5%',
        },
        alignSelf: 'center',
        mb: 8,
        mt: 1,
      }}
    >
      <ContainerFiltros/>
            
      {productos2?.slice(0, productosMostrados).map((producto) => (
        <Grid item mobile={12} tablet={6} laptop={6} desktop={6} key={producto.id}>

          <CardP producto = {producto}/>
          
        </Grid>
      ))}

      <Grid item xs={12} sm={6} md={6} lg={6} sx={{ display: 'space-between', justifyContent: 'center', alignItems: 'center', mt: 8, margin: 0,}}>
        <Button variant="contained" onClick={mostrarMasProductos}>
          Mostrar más
        </Button>
      </Grid>
  
    </Grid>
  );
};
    
export default Home;
    