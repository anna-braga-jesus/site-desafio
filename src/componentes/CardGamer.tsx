import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import gamer from '../../public/gamer.jpg'

const styles = {
  SaberMais: {
    backgroundColor: '#00ad12', // Cor de fundo verde
    color: '#fff', // Cor do texto branca
  },
};


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
        <Button size="small" sx={styles.SaberMais}> Saiba mais!</Button>
      </CardActions>
    </Card>
  );
}
