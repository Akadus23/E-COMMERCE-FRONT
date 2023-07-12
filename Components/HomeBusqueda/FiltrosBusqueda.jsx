import React, { useState, useEffect } from 'react';
import { Box, Button, Container, OutlinedInput, InputLabel, MenuItem, FormControl, Select,  } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Favorite, FavoriteBorder } from '@mui/icons-material';
import {useSelector, useDispatch} from 'react-redux'
import { getAllProducts, limpiarFiltroyBusqueda } from '../../Redux/actions';

export default function FiltrosBusqueda() {
    const [categoriasSeleccionadas, setCategoriasSeleccionadas] = useState([]);
    const [coloresSeleccionados, setColoresSeleccionados] = useState([]);
    const [ordenPrecio, setOrdenPrecio]= useState("")
    const dispatch = useDispatch();
    const {busquedaProducto, categorias, productoBuscado} = useSelector((state)=>state)
    const productos2 = busquedaProducto;

    const handleOrdenPrecio = (e) =>{
      const orden = e.target.value
      setOrdenPrecio(orden)
    }   
    const handleCategoriasChange = (event) => {
        // const {
        //   target: { value },
        // } = event;
       const categoria = event.target.value
        setCategoriasSeleccionadas(categoria);
      };
      
      const handleColoresChange = (event) => {
        // const {
        //   target: { value },
        // } = event;
        const color = event.target.value
      
        setColoresSeleccionados(color);
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

      const aplicarFiltros = () => {

        alert('Se filtrara por categoria '+categoriasSeleccionadas[0] +"y colorgfdasgsfdhsa" + coloresSeleccionados[0])

        dispatch(aplicarFiltros());
      }
      const limpiarFiltros = () => {
            setCategoriasSeleccionadas([]); 
            setColoresSeleccionados([]);
            dispatch(limpiarFiltroyBusqueda);
            dispatch(getAllProducts(1))
             // Restablecer las selecciones de categorías y colores
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
          {categorias?.map((categoria) => (
            <MenuItem
              key={categoria.id}
              value={categoria.nombrecat}
              style={getStyles(categoria.nombrecat, categoriasSeleccionadas, theme)}
            >
              {categoria.nombrecat}
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
            producto.colorproducto?.forEach((color) => {
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
      <Box xs={12} sm={6} md={6} lg={6} sx={{ display: 'space-between', justifyContent: 'center', alignItems: 'center', mt: 8, margin: 0 }}>
      <FormControl sx={{ m: 1, width: 200 }}>
        <Select
        labelId="Orden precio"
        label="Orden precio"
        id="price"
        value={ordenPrecio}
        onChange={handleOrdenPrecio}
        input={<OutlinedInput label="Orden" />}
        MenuProps={MenuProps}>
        <MenuItem
        key={"Ascendente"}
        value={"up"}
        >
          Ascendente
        </MenuItem>  
        <MenuItem
        key={"down"}
        value={"down"}
        >
          Descendente
        </MenuItem> 
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
