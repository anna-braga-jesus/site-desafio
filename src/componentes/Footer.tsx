import React from 'react';
import { Container, Typography } from '@mui/material';

function Footer() {
  return (
    <Container style={{ marginTop: 'auto', padding: '16px', textAlign: 'center' }}>
      <Typography variant="body2">
        © {new Date().getFullYear()} Grupo Terra. Todos os direitos reservados.
      </Typography>
    </Container>
  );
}

export default Footer;
