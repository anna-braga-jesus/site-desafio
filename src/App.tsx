import "./App.css";
import {AppBar,Container, Chip, Avatar,Toolbar, Typography, Button, IconButton} from '@mui/material';
import VideoPlayer from "./componentes/Video";
import CardResidencial from "./componentes/CardResidencial";
import CardCorporativo from "./componentes/CardGamer";
import Banner from "./componentes/Banner";
import Footer from "./componentes/Footer";


function App() {
  return (
    <div>
    <AppBar position="static">
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

  <VideoPlayer/>
    <Footer />
  </div>
  )
  
}

export default App;
