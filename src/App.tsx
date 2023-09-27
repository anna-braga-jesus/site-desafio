import "./App.css";
import {AppBar,Container, Toolbar, Typography, Button, IconButton} from '@mui/material';
import VideoPlayer from "./componentes/Video";
import CardResidencial from "./componentes/CardResidencial";
import CardCorporativo from "./componentes/CardGamer";
import Banner from "./componentes/Banner";
import Footer from "./componentes/Footer";

const styles = {
  appBar: {
    background: 'linear-gradient(to right, #00ad12, #008a0d)', // Gradiente de verde da Oi
  },
  title: {
    flexGrow: 1,
  },
   centered: {
    position: 'absolute',
    margin: '20px',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: '#00ad12', 
    color: '#fff',
    width: '350px', 
    height: '50px',
    fontSize: '20px',
     
   },
};

function App() {
 
  return (
    <div>
    <AppBar position="static" sx={styles.appBar}>
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Metaverso Oi Fibra
        </Typography>

        <Button color="inherit">Página Inicial</Button>
        <Button color="inherit">Sobre</Button>
        <Button color="inherit">Contato</Button>
        <IconButton color="inherit">
        </IconButton>
      </Toolbar>
    </AppBar>
    <Banner />
    <Container sx={{ marginTop: '16px' }}>
        <Typography variant="h4" gutterBottom>
          Oi Fibra
        </Typography>
        
        <Typography variant="body1">
         Estamos promovendo pela primeira vez a experiência de <b>Realidade Virtual</b>. Você será acompanhado pelo "NPC" chatbot, que fará uma oferta personalizada dependendo do seu perfil. Para jogar, primeiro escolha o seu ambiente virtual:
        </Typography>
      </Container>

    <div className="central">
      {/* Empresarial */}
  <CardCorporativo /> 
  {/* Residencial */}
  <CardResidencial />
    </div>
    <Button size= "small" sx={styles.centered}> JOGUE AGORA!</Button>

  <VideoPlayer/>
  
    <Footer />
  </div>

  )
  
}

export default App;
