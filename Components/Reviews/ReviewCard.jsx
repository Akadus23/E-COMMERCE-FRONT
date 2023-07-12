import React from 'react'
import { CardContent, Typography, Rating, Box, Card} from '@mui/material';

export default function ReviewCard({usuarioId, description, rating, createdAt}) {
    
  return (
    <Box sx={{ minWidth: 275 }}>
     <Card variant="outlined">
    <CardContent>
    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
      Reviewer ID: {usuarioId}
      
    </Typography>
 
    <Rating readOnly
    value={rating}/>
    
    <Typography variant="body2">
      {description}
      <br />
    </Typography>
    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom >
      Calificado el: {createdAt?.slice(0, 10)}
      
    </Typography>
  </CardContent>
  </Card>   
  </Box>
  )
}
