import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import casa from '../../public/pexels-thgusstavo-santana-2102587.jpg'

const styles = {
  SaberMais: {
    backgroundColor: '#00ad12', // Cor de fundo verde
    color: '#fff', // Cor do texto branca
  },
};

export default function CardResidencial() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={casa}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Residencial
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Conheça nossos combos para toda a família, uma experiência personalizada para o ambiente familiar e para cada indivíduo.
        </Typography>
      </CardContent>
      <CardActions>
      <Button size="small" sx={styles.SaberMais}> Saiba mais!</Button>        
      </CardActions>
    </Card>
  );
}
