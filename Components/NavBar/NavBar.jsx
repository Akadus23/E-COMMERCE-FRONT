import React from "react";
import { Link, useNavigate} from "react-router-dom";
import SearchBar from "./SearchBar";
import logo from "../Img/Logo.png";
import Login from "../Login/Login";
import { useAuth0 } from "@auth0/auth0-react";
import LogOut from "../LogOut/LogOut";
import {
  AppBar,
  Toolbar,
  Box,
  Button,
  Container,
  IconButton,
  Typography,
  Grid,
  Stack,
  Hidden,
  Slide,
} from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import HomeIcon from "@mui/icons-material/Home";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';


export default function NavBar() {
  const { isAuthenticated } = useAuth0();
  const navigate = useNavigate();
  
  const [showCategories, setShowCategories] = React.useState(true);
  const handleArrowButtonClick = () => {
    setShowCategories(!showCategories);
  };
  function handleClick(ruta){
    navigate(`/buscar/${ruta}`)
  }
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <AppBar
      position="static"
      className="navbar-container"
      sx={{ backgroundColor: "#f44336", height: matches ? 120 : 180,  }}
    >
      <Toolbar sx={{ mt: matches ? 2 : 3, ml: 5  }}>
        <Box
          sx={{
            flexGrow: 1,
            display: "flex",
            alignItems: "center",
            width: matches ? "60%" : "40%", // Ajusta el ancho según el modo responsivo
            height: matches ? "10%" : "20%",
          }}
        >
          <IconButton color="inherit" component={Link} to="/">
            <img src={logo} alt="" className="logo" sx={{ height: "40px" }} />
          </IconButton>
          <Box display="flex" justifyContent="center" width="100%">
            <SearchBar></SearchBar>
          </Box>
        </Box>

        <IconButton color="inherit" component={Link} to="/carrito">
          <ShoppingCartIcon sx={{ fontSize: 40 }} />
        </IconButton>
      </Toolbar>

      <Toolbar sx={{ mt: 1 }}>
        <Grid container justifyContent="space-between">
          <Box item xs={6} md={2} sx={{ width: 40, ml: 5 }}>
            <Box display="flex" justifyContent="center">
              <IconButton color="inherit" component={Link} to="/home">
                <HomeIcon sx={{ fontSize: 40 }} />
              </IconButton>
            </Box>
          </Box>

          <Grid item xs={6} md={4} sx={{ width: "80%", mr: 18, mt: 3 }}>
            <Box display="flex" justifyContent="start" alignItems="center">
              <Box className="categorias">
                {showCategories && (
                  <Box
                    sx={{ display: "flex", alignItems: "center", gap: "20px" }}
                  >
                   
                      <Typography sx={{cursor: 'pointer'}} variant="body1" onClick={()=>handleClick("tecnologia")}>Tecnología</Typography>
                    
                    <Link
                      to="/busqueda/electrodomesticos"
                      style={{ textDecoration: "none", color: "white" }}
                    >
                      <Typography sx={{cursor: 'pointer'}} variant="body1" onClick={()=>handleClick("electrodomesticos")}>Electrodomésticos</Typography>
                    </Link>
                    <Link
                      to="/busqueda/hogar"
                      style={{ textDecoration: "none", color: "white" }}
                    >
                      <Typography sx={{cursor: 'pointer'}} variant="body1" onClick={()=>handleClick("hogar")}>Hogar </Typography>
                    </Link>
                    <Link
                      to="/busqueda/herramientas"
                      style={{ textDecoration: "none", color: "white" }}
                    >
                      <Typography sx={{cursor: 'pointer'}} variant="body1" onClick={()=>handleClick("herramientas")}>Herramientas</Typography>
                    </Link>
                    <Link
                      to="/busqueda/moda"
                      style={{ textDecoration: "none", color: "white" }}
                    >
                      <Typography sx={{cursor: 'pointer'}} variant="body1" onClick={()=>handleClick("moda")}>Moda</Typography>
                    </Link>
                    <Link
                      to="/busqueda/Juguetes"
                      style={{ textDecoration: "none", color: "white" }}
                    >
                      <Typography sx={{cursor: 'pointer'}} variant="body1" onClick={()=>handleClick("juguetes")}>Juguetes</Typography>
                    </Link>
                    <Link
                      to="/busqueda/construccion"
                      style={{ textDecoration: "none", color: "white" }}
                    >
                      <Typography sx={{cursor: 'pointer'}} variant="body1" onClick={()=>handleClick("construccion")}>Construcción</Typography>
                    </Link>
                  </Box>
                )}
              </Box>
            </Box>
          </Grid>

          <Grid item xs={6} md={2} sx={{ width: 150, mt: 2 }}>
            <Box display="flex" justifyContent="flex-end">
              <Stack direction="row" spacing={2}>
                <Hidden mdUp>
                  <IconButton color="inherit" onClick={handleArrowButtonClick}>
                    <KeyboardArrowRightIcon />
                  </IconButton>
                </Hidden>
                {isAuthenticated ? (
                  <>
                  <Link
                    to="/profile"
                    style={{ textDecoration: "none", color: "white" }}
                    >
                    <Button
                      variant="outlined"
                      sx={{
                        borderColor: "#ffa726",
                        color: "black",
                        borderWidth: 1,
                        backgroundColor: "#ffa726",
                        borderRadius: "10%",
                        width: "95px",
                        height: "40px",
                      }}
                    >
                      <Typography sx={{ fontSize: "12px" }}>
                        Mi cuenta
                      </Typography>
                    </Button>
                  </Link>
                  <Link
                  to="/formProducto"
                  style={{
                    textDecoration: "none",
                    color: "white",
                    marginLeft: "10px",
                  }}
                >
                  <Button
                    variant="outlined"
                    sx={{
                      borderColor: "#ffa726",
                      color: "black",
                      borderWidth: 1,
                      backgroundColor: "#ffa726",
                      borderRadius: "10%",
                      width: "95px",
                      height: "40px",
                    }}
                    >
                    <Typography sx={{ fontSize: "12px" }}>Vender</Typography>
                  </Button>
                </Link>
                    </>
                ) : null}

                {isAuthenticated ? <LogOut /> : <Login />}
              </Stack>
            </Box>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
}
