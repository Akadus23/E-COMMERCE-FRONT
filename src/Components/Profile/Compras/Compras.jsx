
//////////////////////////////////////////////////////


import React, { useEffect, useState, } from "react";
// import PropTypes from "prop-types";
import axios from 'axios'
import { useAuth0 } from "@auth0/auth0-react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  Box,
  TablePagination,
  TableRow,
  TableHead,
  
  IconButton,
  Link,
  Button,
  Rating
} from "@mui/material";
import { CompareArrowsOutlined } from "@mui/icons-material";

const headCells = [
    {
        id: "Nombre",
        numeric: true,
        disablePadding: false,
        label: "Nombre",
    },
    {
      id: "Cantidad",
      numeric: true,
      disablePadding: false,
      label: "Cantidad",
    },
    {
      id: "Precio",
      numeric: true,
      disablePadding: false,
      label: "Precio",
    },
    {
      id: "Compra",
      numeric: true,
      disablePadding: false,
      label: "Compra",
    },
    {
      id: "Subtotal",
      numeric: false,
      disablePadding: true,
      label: "Subtotal",
    },
    {
      id: "Reseña",
      numeric: true,
      disablePadding: false,
      label: "Reseña",
    },
  ];

  const rows = [
    {
      name: "Moto E22 32gb 3gb Ram Azul",
      imagen:
        "https://armoto.vtexassets.com/arquivos/ids/163745-800-auto?v=638097509786700000&width=800&height=auto&aspect=true",
      cantidad: "1",
      color: "negro",
      precio: "150",
      compra: "aceptada",
    },
    {
        name: "Moto E22 32gb 3gb Ram Azul",
        imagen:
          "https://armoto.vtexassets.com/arquivos/ids/163745-800-auto?v=638097509786700000&width=800&height=auto&aspect=true",
        cantidad: "1",
        color: "negro",
        precio: "150",
        compra: "aceptada",
      },
      {
        name: "Moto E22 32gb 3gb Ram Azul",
        imagen:
          "https://armoto.vtexassets.com/arquivos/ids/163745-800-auto?v=638097509786700000&width=800&height=auto&aspect=true",
        cantidad: "1",
        color: "negro",
        precio: "150",
        compra: "aceptada",
      },
      {
        name: "Moto E22 32gb 3gb Ram Azul",
        imagen:
          "https://armoto.vtexassets.com/arquivos/ids/163745-800-auto?v=638097509786700000&width=800&height=auto&aspect=true",
        cantidad: "1",
        color: "negro",
        precio: "150",
        compra: "aceptada",
      },
      {
        name: "Moto E22 32gb 3gb Ram Azul",
        imagen:
          "https://armoto.vtexassets.com/arquivos/ids/163745-800-auto?v=638097509786700000&width=800&height=auto&aspect=true",
        cantidad: "1",
        color: "negro",
        precio: "150",
        compra: "aceptada",
      },

    //   {*}
    {
        name: "Moto E22 32gb 3gb Ram Azul",
        imagen:
          "https://armoto.vtexassets.com/arquivos/ids/163745-800-auto?v=638097509786700000&width=800&height=auto&aspect=true",
        cantidad: "1",
        color: "negro",
        precio: "150",
        compra: "aceptada",
      },
      {
        name: "Moto E22 32gb 3gb Ram Azul",
        imagen:
          "https://armoto.vtexassets.com/arquivos/ids/163745-800-auto?v=638097509786700000&width=800&height=auto&aspect=true",
        cantidad: "1",
        color: "negro",
        precio: "150",
        compra: "aceptada",
      },
      {
        name: "Moto E22 32gb 3gb Ram Azul",
        imagen:
          "https://armoto.vtexassets.com/arquivos/ids/163745-800-auto?v=638097509786700000&width=800&height=auto&aspect=true",
        cantidad: "1",
        color: "negro",
        precio: "150",
        compra: "aceptada",
      },
      {
        name: "Moto E22 32gb 3gb Ram Azul",
        imagen:
          "https://armoto.vtexassets.com/arquivos/ids/163745-800-auto?v=638097509786700000&width=800&height=auto&aspect=true",
        cantidad: "1",
        color: "negro",
        precio: "150",
        compra: "aceptada",
      },
      {
        name: "Moto E22 32gb 3gb Ram Azul",
        imagen:
          "https://armoto.vtexassets.com/arquivos/ids/163745-800-auto?v=638097509786700000&width=800&height=auto&aspect=true",
        cantidad: "1",
        color: "negro",
        precio: "150",
        compra: "aceptada",
      },

    //   {*}
    {
        name: "Moto E22 32gb 3gb Ram Azul",
        imagen:
          "https://armoto.vtexassets.com/arquivos/ids/163745-800-auto?v=638097509786700000&width=800&height=auto&aspect=true",
        cantidad: "1",
        color: "negro",
        precio: "150",
        compra: "aceptada",
      },
      {
        name: "Moto E22 32gb 3gb Ram Azul",
        imagen:
          "https://armoto.vtexassets.com/arquivos/ids/163745-800-auto?v=638097509786700000&width=800&height=auto&aspect=true",
        cantidad: "1",
        color: "negro",
        precio: "150",
        compra: "aceptada",
      },
      {
        name: "Moto E22 32gb 3gb Ram Azul",
        imagen:
          "https://armoto.vtexassets.com/arquivos/ids/163745-800-auto?v=638097509786700000&width=800&height=auto&aspect=true",
        cantidad: "1",
        color: "negro",
        precio: "150",
        compra: "aceptada",
      },
      {
        name: "Moto E22 32gb 3gb Ram Azul",
        imagen:
          "https://armoto.vtexassets.com/arquivos/ids/163745-800-auto?v=638097509786700000&width=800&height=auto&aspect=true",
        cantidad: "1",
        color: "negro",
        precio: "150",
        compra: "aceptada",
      },
      {
        name: "Moto E22 32gb 3gb Ram Azul",
        imagen:
          "https://armoto.vtexassets.com/arquivos/ids/163745-800-auto?v=638097509786700000&width=800&height=auto&aspect=true",
        cantidad: "1",
        color: "negro",
        precio: "150",
        compra: "aceptada",
      },
  ];

export default function Compras() {
    // const [value, setValue] = useState(2);
  //   const [order, setOrder] = useState("asc");
    const [rating, setRating] = useState(0)
    const [usuarioId, setUsuarioId]= useState(0)
    const [selected, setSelected] = useState([]);
    const [page, setPage] = useState(0);
    const [dense, setDense] = useState(false);
    const [rowsPerPage, setRowsPerPage] = useState(5);
    const {user} = useAuth0()
    const [compras, setCompras] = useState([])
        
    async function traerCompras() {
      try{
      const response = await axios.get(`/ocs/${user.email}`)
      const respones = response.data
      const resUsuario = await axios.get(`/usuarios/${user.sub}`)
        console.log(respones)
        console.log(resUsuario.data)
        const nuevasCompras = []
      respones.forEach(oc => {
        oc.detalleocs?.forEach(prod =>{
          const compra = {
            name: prod.nombreproducto,
            imagen: "hola",
            cantidad: prod.cant,
            subtotal: prod.subtotal,
            precio: prod.valorunitario,
            compra: oc.estadooc,
            productoId: prod.idproducto
          }
          nuevasCompras.push(compra)
        })
      });
      setCompras(nuevasCompras)
      setUsuarioId(resUsuario.data.id)

    }catch(err){
        console.log(err.message)
      }
    }
    useEffect(()=>{
      traerCompras();
    },[])
    console.log(compras)
    const [product, setProduct] = useState('producto');

    if(compras.length === 0){
      return <p>Cargando info</p>
    }
    
  
    const handleButtonClick = async (productoId) => {
      try{
      var descripcion = ""
      if(rating === 0) alert("Debe seleccionar una calificación")
      if(rating === 1) descripcion = "Malisimo"
      if(rating === 2) descripcion = "Malo"
      if(rating === 3) descripcion = "Normal"
      if(rating === 4) descripcion = "Bueno"
      if(rating === 5) descripcion = "Excelente!"

        const review ={
          productoId: productoId,
          usuarioId: usuarioId,
          description: descripcion,
          rating: rating
  
        }
        
          const response = await axios.post("/review", review)
          console.log(response)
          alert("calificacion exitosa ")
        }catch(err){
          alert("este producto ya fue calificado por usted")
        }
       
        // Redireccionar a la página de reviews con los parámetros de usuario y producto
        
    };
  
    const handleClick = (event, name) => {
      const selectedIndex = selected.indexOf(name);
      let newSelected = [];
  
      if (selectedIndex === -1) {
        newSelected = newSelected.concat(selected, name);
      } else if (selectedIndex === 0) {
        newSelected = newSelected.concat(selected.slice(1));
      } else if (selectedIndex === selected.length - 1) {
        newSelected = newSelected.concat(selected.slice(0, -1));
      } else if (selectedIndex > 0) {
        newSelected = newSelected.concat(
          selected.slice(0, selectedIndex),
          selected.slice(selectedIndex + 1)
        );
      }
  
      setSelected(newSelected);
    };
  
    const handleChangePage = (event, newPage) => {
      setPage(newPage);
    };
  
    const handleChangeRowsPerPage = (event) => {
      setRowsPerPage(parseInt(event.target.value, 10));
      setPage(0);
    };
  
  
    return (
        <Box sx={{ width: "100%", height: "100%", }}>
          <Box
            sx={{
                width: "100%",
                height: "100%",
                mb: 2,
                border: "0.1em solid black",
                background: "#F5F5F5",
                display: "flex",
                flexDirection: "column",
              }}
          >
            <TableContainer>
              <Table sx={{ minWidth: 750 }} aria-labelledby="tableTitle" size={dense ? "small" : "medium"}>
              <TableHead >
                <TableRow >
                    {headCells.map((headCell) => (
                    <TableCell
                        key={headCell.id}
                        align="center"
                        padding={headCell.disablePadding ? "none" : "normal"}
                        sx={{
                            paddingLeft: headCell.id === "Producto" ? "1.5rem" : undefined,
                          }}
                    >
                        {headCell.label}
                    </TableCell>
                    ))}
                </TableRow>
                </TableHead>
                
                <TableBody>
                    {compras
                        .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                        .map((row) => (
                        <TableRow
                            key={row.name}
                            hover
                            onClick={(event) => handleClick(event)}
                            role="checkbox"
                            tabIndex={-1}
                            sx={{ cursor: "pointer" }}
                        >
                            
                            
                            <TableCell align="right">{row.name}</TableCell>
                            <TableCell align="right">{row.cantidad}</TableCell>
                            <TableCell align="right">{row.precio}</TableCell>
                            <TableCell align="right">{row.subtotal}</TableCell>
                            <TableCell align="right">{row.compra}</TableCell>
                            <TableCell align="right">
                            <IconButton component={Link} to="/reviews" aria-label="Calificar">
                            <Rating name="calificar" value={rating} onChange={(e, newValue)=>{
                              setRating(newValue)
                            }}></Rating>
                            <Button
                                component={Button}
                                variant="contained"
                                style={{ backgroundColor: '#880e4f', color: 'white' }}
                                onClick={()=>handleButtonClick(row.productoId)}
                                >
                                Calificar
                                </Button>
                            </IconButton>
                            </TableCell>
                        </TableRow>
                        ))}
                    </TableBody>

              </Table>
            </TableContainer>
            <TablePagination
                rowsPerPageOptions={[5, 10, 25]}
                component="div"
                count={compras.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
                nextIconButtonProps={{
                    disabled: (page + 1) * rowsPerPage >= compras.length,
                }}
                backIconButtonProps={{
                    disabled: page === 0,
                }}
                labelRowsPerPage="Filas por página:"
                labelDisplayedRows={({ from, to, count }) =>
                    `${from}-${to} de ${count !== -1 ? count : to}`
                }
                />

          </Box>
        </Box>
      );
      
  }