import React, { useEffect } from 'react';
import CardProducto from '../CardProducto/CardProducto';
import { makeStyles } from '@mui/styles';
import { Box } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { getAllProducts } from '../../Redux/actions';

const useStyles = makeStyles({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
   
  },
});

export default function CardContainer() {
  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    // Despachamos la acción que nos trae los objetos al estado local
    dispatch(getAllProducts());
  }, []);

  // Traemos los objetos del estado local
  const { allProducts } = useSelector((state) => state);

  return (
    
    <Box sx={{ marginTop: '100px', marginBottom: '40px' }}>
      
      <div className={classes.container}>
        {allProducts &&
          allProducts.map((prod) => (
            <CardProducto
              key={prod.id}
              name={prod.name}
              image={prod.image}
              price={prod.price}
            />
          ))}
      </div>
    </Box>
  );
}
