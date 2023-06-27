import React, { useState, useEffect } from 'react';
import { Box, Button, Container, CardContent, CardHeader, Link, Typography, Avatar, Grid, Card, CardActions, IconButton, OutlinedInput, InputLabel, MenuItem, FormControl, FormControlLabel, Checkbox, Select, Chip, useTheme, Stack } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Favorite, FavoriteBorder } from '@mui/icons-material';
import {useSelector, useDispatch} from 'react-redux'
import { getAllProducts } from '../../Redux/actions';

export default function ContainerFiltros() {
    const [categoriasSeleccionadas, setCategoriasSeleccionadas] = useState([]);
    const [coloresSeleccionados, setColoresSeleccionados] = useState([]);
    const dispatch = useDispatch();
    const {allProducts} = useSelector((state)=>state)
    const productos2 = allProducts;

    const handleCategoriasChange = (event) => {
        const {
          target: { value },
        } = event;
        setCategoriasSeleccionadas(value);
      };
      
      const handleColoresChange = (event) => {
        const {
          target: { value },
        } = event;
        setColoresSeleccionados(value);
      };  

      function getStyles(name, personName, theme) {
        return {
          fontWeight:
            personName.indexOf(name) === -1
              ? theme.typography.fontWeightRegular
              : theme.typography.fontWeightMedium,
        };
      }

        const ITEM_HEIGHT = 48;
        const ITEM_PADDING_TOP = 8;
        const MenuProps = {
            PaperProps: {
            style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 250,
          },
        },
      };
      const theme = createTheme({
        breakpoints: {
          values: {
            xs: 0,
            sm: 600,
            md: 960,
            lg: 1280,
            xl: 1920,
          },
        },
      });

      const aplicarFiltros = (categorias, colores) => {
        // Filtrar los resultados en función de las categorías y colores seleccionados
        // const resultadosFiltrados = productos2.filter((producto) => {
        //   const categoriasSeleccionadas = Array.isArray(categorias) ? categorias : [categorias];
        //   const coloresSeleccionados = Array.isArray(colores) ? colores : [colores];
      
        //   // Verificar si el producto pertenece a alguna de las categorías seleccionadas
        //   const perteneceACategoria = categoriasSeleccionadas.includes(producto.categoría);
      
        //   // Verificar si el producto tiene alguno de los colores seleccionados
        //   const tieneColor = coloresSeleccionados.some((color) => producto.colores.includes(color));
          
      
        //   // Retornar true si el producto cumple con los filtros, de lo contrario false
        //   return perteneceACategoria && tieneColor;
        // });
        }
        const limpiarFiltros = () => {
            setCategoriasSeleccionadas([]); 
            setColoresSeleccionados([]); // Restablecer las selecciones de categorías y colores
            // Otros pasos para limpiar los filtros si es necesario
          };  

  return (
    <Container sx={{ display: 'space-between', justifyContent: 'center',}}>
        <Box  xs={12} sm={6} md={6} lg={6} sx={{ display: 'space-between', justifyContent: 'center', alignItems: 'center', mt: 8, margin: 0 }}>
        <FormControl sx={{ m: 1, width: 300 }}>
          <InputLabel id="demo-multiple-producto-label">Categoría</InputLabel>
          <Select
            labelId="demo-multiple-producto-label"
            id="demo-multiple-producto"
            multiple
            value={categoriasSeleccionadas}
            onChange={handleCategoriasChange}
            input={<OutlinedInput label="Categoría" />}
            MenuProps={MenuProps}
          >
          {productos2?.map((producto) => (
            <MenuItem
              key={producto.id}
              value={producto.categoria}
              style={getStyles(producto.categoria, categoriasSeleccionadas, theme)}
            >
              {producto.categoria}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      </Box>

      <Box xs={12} sm={6} md={6} lg={6} sx={{ display: 'space-between', justifyContent: 'center', alignItems: 'center', mt: 8, margin: 0 }}>
      <FormControl sx={{ m: 1, width: 300 }}>
        <InputLabel id="demo-multiple-name-label">Colores</InputLabel>
        <Select
          labelId="demo-multiple-colores-label"
          id="demo-multiple-colores"
          multiple
          value={coloresSeleccionados}
          onChange={handleColoresChange}
          input={<OutlinedInput label="Colores" />}
          MenuProps={MenuProps}
        >
          {productos2.reduce((colores, producto) => {
            producto.colorproducto?.split(",").forEach((color) => {
              if (!colores.includes(color)) {
                colores.push(color);
              }
            });
            return colores;
          }, []).map((color, index) => (
            <MenuItem
              key={index}
              value={color}
              style={getStyles(color, coloresSeleccionados, theme)}
            >
              {color}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      </Box>
      
      <Box sx={{ textAlign: 'right', mt: 2 }}>
        <Button variant="contained" onClick={aplicarFiltros} sx={{ ml: 2 }} >
          Aplicar
        </Button>
        <Button variant="contained" onClick={limpiarFiltros} sx={{ marginLeft: 2 }}>
          Limpiar
        </Button>
      </Box>
    </Container>  
  )
}
