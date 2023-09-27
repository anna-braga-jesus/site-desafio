import React from 'react';
import video from '../../public/2023-09-27-10-10-10.mp4';

function VideoPlayer() {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '70vh' }}>
        <video width="800" height="500" controls>
          <source src={video} type="video/mp4" />
          Seu navegador não suporta o elemento de vídeo.
        </video>
        
      </div>
    );
  }
  
  
export default VideoPlayer;
