// import React, { useState, useMemo } from "react";
// import PropTypes from "prop-types";
// import Box from "@mui/material/Box";
// import {
//   Table,
//   TableBody,
//   TableCell,
//   TableContainer,
//   TableHead,
//   TablePagination,
//   TableRow,
//   TableSortLabel,
//   Paper,
//   Button,
//   Link,
//   IconButton,
// } from "@mui/material";
// import { visuallyHidden } from "@mui/utils";
// import s from "./Compras.module.css";

// // function createData(name, imagen, cantidad, precio, compra) {
// //   return {
// //     name,
// //     imagen,
// //     cantidad,
// //     precio,
// //     compra,
// //   };
// // }

// const rows = [
//   {
//     name: "Moto E22 32gb 3gb Ram Azul",
//     imagen:
//       "https://armoto.vtexassets.com/arquivos/ids/163745-800-auto?v=638097509786700000&width=800&height=auto&aspect=true",
//     cantidad: "1",
//     color: "negro",
//     precio: "150",
//     compra: "aceptada",
//   },
// ];

// function descendingComparator(a, b, orderBy) {
//   if (b[orderBy] < a[orderBy]) {
//     return -1;
//   }
//   if (b[orderBy] > a[orderBy]) {
//     return 1;
//   }
//   return 0;
// }

// function getComparator(order, orderBy) {
//   return order === "desc"
//     ? (a, b) => descendingComparator(a, b, orderBy)
//     : (a, b) => -descendingComparator(a, b, orderBy);
// }

// function stableSort(array, comparator) {
//   const stabilizedThis = array.map((el, index) => [el, index]);
//   stabilizedThis.sort((a, b) => {
//     const order = comparator(a[0], b[0]);
//     if (order !== 0) {
//       return order;
//     }
//     return a[1] - b[1];
//   });
//   return stabilizedThis.map((el) => el[0]);
// }

// const headCells = [
//   {
//     id: "Nombre",
//     numeric: false,
//     disablePadding: true,
//     label: "Nombre",
//   },
//   {
//     id: "Cantidad",
//     numeric: true,
//     disablePadding: false,
//     label: "Cantidad",
//   },
//   {
//     id: "Precio",
//     numeric: true,
//     disablePadding: false,
//     label: "Precio",
//   },
//   {
//     id: "Compra",
//     numeric: true,
//     disablePadding: false,
//     label: "Compra",
//   },
//   {
//     id: "Reseña",
//     numeric: true,
//     disablePadding: false,
//     label: "Reseña",
//   },
// ];

// function EnhancedTableHead(props) {
//   const {
    
//     order,
//     orderBy,
    
    
//     onRequestSort,
//   } = props;

//   const createSortHandler = (property) => (event) => {
//     onRequestSort(event, property);
//   };

//   return (
//     <TableHead>
//       <TableRow>
//         <TableCell
//           padding="checkbox"
//           style={{ paddingLeft: "20px", width: "70px", paddingRight: "20px" }}
//         >
//           Imagen
//         </TableCell>
//         {headCells.map((headCell) => (
//           <TableCell
//             key={headCell.id}
//             align={headCell.numeric ? "right" : "left"}
//             padding={headCell.disablePadding ? "none" : "normal"}
//             sortDirection={orderBy === headCell.id ? order : false}
//           >
//             <TableSortLabel
//               active={orderBy === headCell.id}
//               direction={orderBy === headCell.id ? order : "asc"}
//               onClick={createSortHandler(headCell.id)}
//             >
//               {headCell.label}
//               {orderBy === headCell.id ? (
//                 <Box component="span" sx={visuallyHidden}>
//                   {order === "desc" ? "sorted descending" : "sorted ascending"}
//                 </Box>
//               ) : null}
//             </TableSortLabel>
//           </TableCell>
//         ))}
//       </TableRow>
//     </TableHead>
//   );
// }

// EnhancedTableHead.propTypes = {
//   numSelected: PropTypes.number.isRequired,
//   // onRequestSort: PropTypes.func.isRequired,
//   // onSelectAllClick: PropTypes.func.isRequired,
//   // order: PropTypes.oneOf(["asc", "desc"]).isRequired,
//   // orderBy: PropTypes.string.isRequired,
//   // rowCount: PropTypes.number.isRequired,
// };

// export default function Compras() {
//   // const [value, setValue] = useState(2);
//   const [order, setOrder] = useState("asc");
//   const [orderBy, setOrderBy] = useState("calories");
//   const [selected, setSelected] = useState([]);
//   const [page, setPage] = useState(0);
//   const [dense, setDense] = useState(false);
//   const [rowsPerPage, setRowsPerPage] = useState(5);

//   const handleRequestSort = (event, property) => {
//     const isAsc = orderBy === property && order === "asc";
//     setOrder(isAsc ? "desc" : "asc");
//     setOrderBy(property);
//   };

//   const handleSelectAllClick = (event) => {
//     if (event.target.checked) {
//       const newSelected = rows.map((n) => n.name);
//       setSelected(newSelected);
//       return;
//     }
//     setSelected([]);
//   };

//   const handleClick = (event, name) => {
//     const selectedIndex = selected.indexOf(name);
//     let newSelected = [];

//     if (selectedIndex === -1) {
//       newSelected = newSelected.concat(selected, name);
//     } else if (selectedIndex === 0) {
//       newSelected = newSelected.concat(selected.slice(1));
//     } else if (selectedIndex === selected.length - 1) {
//       newSelected = newSelected.concat(selected.slice(0, -1));
//     } else if (selectedIndex > 0) {
//       newSelected = newSelected.concat(
//         selected.slice(0, selectedIndex),
//         selected.slice(selectedIndex + 1)
//       );
//     }

//     setSelected(newSelected);
//   };

//   const handleChangePage = (event, newPage) => {
//     setPage(newPage);
//   };

//   const handleChangeRowsPerPage = (event) => {
//     setRowsPerPage(parseInt(event.target.value, 10));
//     setPage(0);
//   };

//   const isSelected = (name) => selected.indexOf(name) !== -1;

//   const emptyRows =
//     page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

//   const visibleRows = useMemo(
//     () =>
//       stableSort(rows, getComparator(order, orderBy)).slice(
//         page * rowsPerPage,
//         page * rowsPerPage + rowsPerPage
//       ),
//     [order, orderBy, page, rowsPerPage]
//   );

//   return (
//     <Box sx={{ width: "100%" }}>
//       <Paper
      
//         sx={{
//           width: "100%",
//           mb: 2,
//           height: "530px",
//           border: "0.1em solid black",
//           background: "#F5F5F5",
//         }}
//       >
//         <Compras numSelected={selected.length} />
//         <TableContainer>
//         <Table
//             sx={{ minWidth: 750 }}
//             aria-labelledby="tableTitle"
//             size={dense ? "small" : "medium"}
//           >
//             <EnhancedTableHead
//               numSelected={selected.length}
//               order={order}
//               orderBy={orderBy}
//               onSelectAllClick={handleSelectAllClick}
//               onRequestSort={handleRequestSort}
//               rowCount={rows.length}
//             />
//             <TableBody>
//               {visibleRows.map((row, index) => {
//                 const isItemSelected = isSelected(row.name);
//                 const labelId = `enhanced-table-checkbox-${index}`;

//                 return (
//                   <TableRow
//                     hover
//                     onClick={(event) => handleClick(event, row.name)}
//                     role="checkbox"
//                     aria-checked={isItemSelected}
//                     tabIndex={-1}
//                     key={row.name}
//                     selected={isItemSelected}
//                     sx={{ cursor: "pointer" }}
//                   >
//                     <TableCell padding="checkbox">
//                       <img src={row.imagen} alt="" className={s.imagen} />
//                     </TableCell>
//                     <TableCell
//                       component="th"
//                       id={labelId}
//                       scope="row"
//                       padding="none"
//                     >
//                       {row.name}
//                     </TableCell>
//                     <TableCell align="right">{row.cantidad}</TableCell>
//                     <TableCell align="right">{row.precio}</TableCell>
//                     <TableCell align="right">{row.compra}</TableCell>
//                     <TableCell align="right">
//                       <Box
//                         sx={{
//                           "& > legend": { mt: 2 },
//                         }}
//                       >
//                         <IconButton
//                           component={Link}
//                           to="/reviews"
//                           aria-label="Calificar"
//                         >
//                           <Button
//                             variant="contained"
//                             style={{ backgroundColor: '#880e4f', color: 'white' }}
//                           >
//                             Calificar
//                           </Button>
//                         </IconButton>
//                       </Box>
//                     </TableCell>
//                   </TableRow>
//                 );
//               })}
//               {emptyRows > 0 && (
//                 <TableRow
//                   style={{
//                     height: (dense ? 33 : 53) * emptyRows,
//                   }}
//                 >
//                   <TableCell colSpan={6} />
//                 </TableRow>
//               )}
//             </TableBody>
//           </Table>
//         </TableContainer>
//         <TablePagination
//           rowsPerPageOptions={[5, 10, 25]}
//           component="div"
//           count={rows.length}
//           rowsPerPage={rowsPerPage}
//           page={page}
//           onPageChange={handleChangePage}
//           onRowsPerPageChange={handleChangeRowsPerPage}
//           nextIconButtonProps={{
//             disabled: (page + 1) * rowsPerPage >= rows.length,
//           }}
//           backIconButtonProps={{
//             disabled: page === 0,
//           }}
//           labelRowsPerPage="Filas por página:"
//           labelDisplayedRows={({ from, to, count }) =>
//             `${from}-${to} de ${count !== -1 ? count : to}`
//           }
//         />
//       </Paper>
      
//     </Box>
//   );
// }


import * as React from 'react';
import PropTypes from 'prop-types';
import { alpha } from '@mui/material/styles';
import {
  Avatar,
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  TableSortLabel,
  Toolbar,
  Typography,
  Paper,
  Checkbox,
  IconButton,
  Tooltip,
  FormControlLabel,
  Switch,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import FilterListIcon from '@mui/icons-material/FilterList';
import { visuallyHidden } from '@mui/utils';


function createData(name, calories, fat, carbs, protein) {
  return {
    name,
    calories,
    fat,
    carbs,
    protein,
  };
}

const rows = [
    {
      name: "Moto E22 32gb 3gb Ram Azul",
      imagen:
        "https://armoto.vtexassets.com/arquivos/ids/163745-800-auto?v=638097509786700000&width=800&height=auto&aspect=truehttps://www.megatone.net/images//Articulos/zoom2x/209/MKT1544CEV-1.jpg",
      cantidad: "1",
      color: "negro",
      precio: "150",
      compra: "aceptada",
    },
  ];

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

// Since 2020 all major browsers ensure sort stability with Array.prototype.sort().
// stableSort() brings sort stability to non-modern browsers (notably IE11). If you
// only support modern browsers you can replace stableSort(exampleArray, exampleComparator)
// with exampleArray.slice().sort(exampleComparator)
function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) {
      return order;
    }
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

const headCells = [
  {
    id: "Nombre",
    numeric: false,
    disablePadding: true,
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
    id: "Reseña",
    numeric: true,
    disablePadding: false,
    label: "Reseña",
  },
];

function EnhancedTableHead(props) {
  const { onSelectAllClick, order, orderBy, numSelected, rowCount, onRequestSort } =
    props;
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow>
        <TableCell padding="checkbox"
        style={{ paddingLeft: "20px", width: "70px", paddingRight: "20px" }}>
           Imagen
         </TableCell>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={headCell.numeric ? 'right' : 'left'}
            padding={headCell.disablePadding ? 'none' : 'normal'}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : 'asc'}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <Box component="span" sx={visuallyHidden}>
                  {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                </Box>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

EnhancedTableHead.propTypes = {
  numSelected: PropTypes.number.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  onSelectAllClick: PropTypes.func.isRequired,
  order: PropTypes.oneOf(['asc', 'desc']).isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired,
};

// function EnhancedTableToolbar(props) {
//   const { numSelected } = props;

//   return (
//     <Toolbar
//       sx={{
//         pl: { sm: 2 },
//         pr: { xs: 1, sm: 1 },
//         ...(numSelected > 0 && {
//           bgcolor: (theme) =>
//             alpha(theme.palette.primary.main, theme.palette.action.activatedOpacity),
//         }),
//       }}
//     >
//       {numSelected > 0 ? (
//         <Typography
//           sx={{ flex: '1 1 100%' }}
//           color="inherit"
//           variant="subtitle1"
//           component="div"
//         >
//           {numSelected} selected
//         </Typography>
//       ) : (
//         <Typography
//           sx={{ flex: '1 1 100%' }}
//           variant="h6"
//           id="tableTitle"
//           component="div"
//         >
//           Nutrition
//         </Typography>
//       )}

//       {numSelected > 0 ? (
//         <Tooltip title="Delete">
//           <IconButton>
//             <DeleteIcon />
//           </IconButton>
//         </Tooltip>
//       ) : (
//         <Tooltip title="Filter list">
//           <IconButton>
//             <FilterListIcon />
//           </IconButton>
//         </Tooltip>
//       )}
//     </Toolbar>
//   );
// }

// EnhancedTableToolbar.propTypes = {
//   numSelected: PropTypes.number.isRequired,
// };

export default function Compras() {
  const [order, setOrder] = React.useState('asc');
  const [orderBy, setOrderBy] = React.useState('calories');
  const [selected, setSelected] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [dense, setDense] = React.useState(false);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelected = rows.map((n) => n.name);
      setSelected(newSelected);
      return;
    }
    setSelected([]);
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
        selected.slice(selectedIndex + 1),
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



  const isSelected = (name) => selected.indexOf(name) !== -1;

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  const visibleRows = React.useMemo(
    () =>
      stableSort(rows, getComparator(order, orderBy)).slice(
        page * rowsPerPage,
        page * rowsPerPage + rowsPerPage,
      ),
    [order, orderBy, page, rowsPerPage],
  );

  return (
    <Box sx={{ width: '100%' }}>
      <Paper sx={{ width: '100%', mb: 2 }}>
      <Compras numSelected={selected.length} />        <TableContainer>
          <Table
            sx={{ minWidth: 750 }}
            aria-labelledby="tableTitle"
            size={dense ? 'small' : 'medium'}
          >
            <EnhancedTableHead
              numSelected={selected.length}
              order={order}
              orderBy={orderBy}
              onSelectAllClick={handleSelectAllClick}
              onRequestSort={handleRequestSort}
              rowCount={rows.length}
            />
            <TableBody>
              {visibleRows.map((row, index) => {
                const isItemSelected = isSelected(row.name);
                const labelId = `enhanced-table-checkbox-${index}`;

                return (
                  <TableRow
                    hover
                    onClick={(event) => handleClick(event, row.name)}
                    role="checkbox"
                    aria-checked={isItemSelected}
                    tabIndex={-1}
                    key={row.name}
                    selected={isItemSelected}
                    sx={{ cursor: 'pointer' }}
                  >
                  <TableCell padding="checkbox">
                    {/* <Avatar alt="" src={imagen} sx={{ width: 48, height: 48 }} /> */}
                  </TableCell>
                    <TableCell
                      component="th"
                      id={labelId}
                      scope="row"
                      padding="none"
                    >
                      {row.name}
                    </TableCell>
                    <TableCell align="right">{row.calories}</TableCell>
                    <TableCell align="right">{row.fat}</TableCell>
                    <TableCell align="right">{row.carbs}</TableCell>
                    <TableCell align="right">{row.protein}</TableCell>
                  </TableRow>
                );
              })}
              {emptyRows > 0 && (
                <TableRow
                  style={{
                    height: (dense ? 33 : 53) * emptyRows,
                  }}
                >
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
      
    </Box>
  );
}


