import React, { useState, useEffect } from "react";
import {
  
  CardContent,
  CardHeader,
  Typography,
  Avatar,
  Card,
  CardActions,
  IconButton,
  Rating
} from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Favorite, FavoriteBorder } from "@mui/icons-material";
import { useSelector, useDispatch } from "react-redux";
import { getAllProducts, getDetail} from "../../Redux/actions";
import { addFavorites, removeFavorites } from "../../Redux/actions";
import { Link, useNavigate } from "react-router-dom";

export default function CardP({ producto }) {
  const dispatch = useDispatch();
  const navigate = useNavigate()
  //awdkawopdkopawkpdokawpokdpoawk
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

  const FavoritoButton = () => {
    const [favorito, setFavorito] = useState(false);

    const toggleFavorito = () => {
      setFavorito(!favorito);
      if (favorito === true) dispatch(addFavorites(producto));
      if (favorito === false) dispatch(removeFavorites(producto));
    };

   
    return (
      <IconButton onClick={toggleFavorito}>
        <ThemeProvider
          theme={
            favorito
              ? createTheme({ palette: { primary: { main: "#ff0000" } } })
              : theme
          }
        >
          {favorito ? <Favorite color="primary" /> : <FavoriteBorder />}
        </ThemeProvider>
      </IconButton>
    );
  };
  function handleClick(){ 
    dispatch(getDetail(producto.id))
    navigate(`/detailProducto/${producto.id}`)
   
  }

  return (
    
    <Card
      sx={{
        maxWidth: "100%",
        minWidth: "200px",
        padding: 2,
        height: "auto",
        backgroundColor: "#dcedc8",
        transition: "transform 0.2s",
        "&:hover": {
          transform: "scale(1.05)",
          cursor: 'pointer'
        },
      }}
      onClick={handleClick}
    >
      <CardHeader
        avatar={
          <Avatar
            src={producto.fotoprinc}
            sx={{
              width: 160,
              height: 160,
              bgcolor: theme.palette.primary.light.toString(),
            }}
            aria-label="product"
          >
            {producto.nombreproducto
              .split(" ")
              .map((ele) => ele[0])
              .join("")}
          </Avatar>
        }
        title={
          <>
            <Typography
              sx={{
                display: "flex",
                width: "80px",
                textOverflow: "ellipsis",
                whiteSpace: "nowrap",
              }}
              variant="h6"
            >
              {producto.nombreproducto}
            </Typography>
            <Typography variant="h7" sx={{ color: "blue" }}>
              {producto.nombrecat}
            </Typography>
          </>
        }
        action={<FavoritoButton />}
      />
      <CardContent
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: "flex-start",
        }}
      >
        <Typography sx={{ width: 200, h: 200, fontSize: 14 }}>
          {producto.descproducto}
        </Typography>
      </CardContent>
      <CardActions
        sx={{
          mt: 2,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
        }}
      >
        <Typography
          sx={{
            fontSize: 12,
            textAlign: "start",
            fontFamily: "Arial",
            color: "black",
          }}
        >
          Stock: {producto.disponibproducto}
        </Typography>
        <Typography
          sx={{
            fontSize: 18,
            textAlign: "start",
            fontFamily: "Arial",
            color: "black",
          }}
        >
          Price: $ {producto.precioproducto}
        </Typography>
      </CardActions>
    </Card>
    
  );
}
