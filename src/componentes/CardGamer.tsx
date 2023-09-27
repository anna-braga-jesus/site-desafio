import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import gamer from '../../public/pexels-tima-miroshnichenko-7046989.jpg'

export default function CardGamer() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={gamer}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Gamer
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Uma experiência personalizada com produtos premium, no qual você pode interagir com todos serviços disponíveis e Iot's(Internet of Things).
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Compartilhe</Button>
        <Button size="small">Navegar</Button>
      </CardActions>
    </Card>
  );
}
