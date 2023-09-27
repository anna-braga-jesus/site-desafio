import video from '../../public/video (2160p).mp4'


export default function Banner() {
    return (
      <div style={{ position: 'relative' }}>
        <video width="100%" height="auto" autoPlay loop muted>
          <source src={video} type="video/mp4" />
          Seu navegador não suporta o elemento de vídeo.
        </video>
        <div style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          background: 'rgba(0, 0, 0, 0.5)',
          padding: '20px',
          color: 'white',
          borderRadius: '8px',
        }}>
          <h1>Seja bem-vindo ao nosso site</h1>
          <p>Explore nossos produtos e serviços incríveis.</p>
          <button>Saiba mais</button>
        </div>
      </div>
    );
  }
  