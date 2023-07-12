import React, { useState, useEffect } from "react";
import {
  Box,
  Button,
  Container,
  Grid,
  Pagination,
  OutlinedInput,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
} from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Favorite, FavoriteBorder } from "@mui/icons-material";
import { useSelector, useDispatch } from "react-redux";
import {
  getAllCategorias,
  getAllProducts,
  limpiarFiltroyBusqueda, getDetail
} from "../../Redux/actions";
import ContainerFiltros from "./ContainerFiltros";
import CardP from "./CardP";
import { useParams } from "react-router-dom";

const Home = () => {
  const [categoriasSeleccionadas, setCategoriasSeleccionadas] = useState([]);
  const [coloresSeleccionados, setColoresSeleccionados] = useState([]);
  const [ordenPrecio, setOrdenPrecio]= useState("")
  const producto = ""
  var {categoria} = useParams()
  if(!categoria){
    categoria =""
  }else {
    setCategoriasSeleccionadas([categoria])} 
  const dispatch = useDispatch();
  const[page, setPage] = useState(1);
  // Función que trae los productos del back al store de redux 
  useEffect(()=>{
    dispatch(getAllProducts(1, producto, coloresSeleccionados, categoriasSeleccionadas, ordenPrecio))
    dispatch(getAllCategorias())
    dispatch(getDetail(1));
  },[])
  function handleChangePagina(e, value){
    
    dispatch(getAllProducts(value, producto, coloresSeleccionados, categoriasSeleccionadas, ordenPrecio))
    setPage(value)

  }

  //Traemos todos los productos del store local
  const { allProducts, paginas, categorias } = useSelector((state) => state);

  const [productosMostrados, setProductosMostrados] = useState(3);


  const productos2 = allProducts;

  const arrayCats = () => {
    var array = [];
    categorias.forEach((cate) => {
      if (!array.includes(cate.nombrecat)) array.push(cate.nombrecat);
    });
    return array;
  };

  const mostrarMasProductos = () => {
    setProductosMostrados((prevProductosMostrados) => prevProductosMostrados + 3);
  };

  const handleOrdenPrecio = (e) => {
    const orden = e.target.value;
    setOrdenPrecio(orden);
  };
  const handleCategoriasChange = (event) => {
    const categoria = event.target.value;
    setCategoriasSeleccionadas(categoria);
  };

  const handleColoresChange = (event) => {
    const color = event.target.value;
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

  const aplicarFiltrado = () => {
    dispatch(
      getAllProducts(
        1,
        producto,
        coloresSeleccionados,
        categoriasSeleccionadas,
        ordenPrecio
      )
    );
    dispatch(getAllCategorias());
  };

    const limpiarFiltros = () => {
      setCategoriasSeleccionadas([]); 
      setColoresSeleccionados([]);
      setOrdenPrecio("")
      //dispatch(limpiarFiltroyBusqueda);
      dispatch(getAllProducts(1, producto))
      setPage(1)
       // Restablecer las selecciones de categorías y colores
      // Otros pasos para limpiar los filtros si es necesario
};  
    
  return (
    <Grid
      container
      spacing={8}
      sx={{
        justifyContent: "center",
        padding: "5%",
        width: {
          mobile: "99.5%",
          tablet: "99.5%",
          laptop: "99.5%",
        },
        alignSelf: "center",
        mb: 8,
        mt: 1,
      }}
    >
      <Container sx={{ display: "space-between", justifyContent: "center" }}>
        <Box
          xs={12}
          sm={6}
          md={6}
          lg={6}
          sx={{
            display: "space-between",
            justifyContent: "center",
            alignItems: "center",
            mt: 8,
            margin: 0,
          }}
        >
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
              {arrayCats()?.map((cate) => (
                <MenuItem
                  key={cate}
                  value={cate}
                  style={getStyles(cate, categoriasSeleccionadas, theme)}
                >
                  {cate}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Box>

        <Box
          xs={12}
          sm={6}
          md={6}
          lg={6}
          sx={{
            display: "space-between",
            justifyContent: "center",
            alignItems: "center",
            mt: 8,
            margin: 0,
          }}
        >
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
              {productos2
                ?.reduce((colores, producto) => {
                  producto.colorproducto?.forEach((color) => {
                    if (!colores.includes(color)) {
                      colores.push(color);
                    }
                  });
                  return colores;
                }, [])
                .map((color, index) => (
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
        <Box
          xs={12}
          sm={6}
          md={6}
          lg={6}
          sx={{
            display: "space-between",
            justifyContent: "center",
            alignItems: "center",
            mt: 8,
            margin: 0,
          }}
        >
          <FormControl sx={{ m: 1, width: 200 }}>
            <Select
              labelId="Orden precio"
              label="Orden precio"
              id="price"
              value={ordenPrecio}
              onChange={handleOrdenPrecio}
              input={<OutlinedInput label="Orden" />}
              MenuProps={MenuProps}
            >
              <MenuItem key={"undefined"} value={undefined}>
                ---
              </MenuItem>
              <MenuItem key={"Ascendente"} value={"up"}>
                Ascendente
              </MenuItem>
              <MenuItem key={"down"} value={"down"}>
                Descendente
              </MenuItem>
            </Select>
          </FormControl>
        </Box>

        <Box sx={{ textAlign: "right", mt: 2 }}>
          <Button variant="contained" onClick={aplicarFiltrado} sx={{ ml: 2 }}>
            Aplicar
          </Button>
          <Button
            variant="contained"
            onClick={limpiarFiltros}
            sx={{ marginLeft: 2 }}
          >
            Limpiar
          </Button>
        </Box>
      </Container>

      {productos2?.slice(0, productosMostrados).map((prods) => (
        <Grid item mobile={12} tablet={6} laptop={6} desktop={6} key={prods.id}>
          <CardP producto={prods} />
        </Grid>
      ))}
    

    <Grid item xs={12} sm={6} md={6} lg={6} sx={{ display: 'space-between', justifyContent: 'center', alignItems: 'center', mt: 8, margin: 0,}}>
          <Button variant="contained" onClick={mostrarMasProductos}>
            Mostrar más
          </Button>
        </Grid>
        <Grid>
        <Pagination count={paginas} page={page} showFirstButton showLastButton onChange={handleChangePagina} ></Pagination>
        </Grid>
      </Grid>
    
  );
};

export default Home;
