import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { GlobalStyles } from '@mui/material';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

export default function RootContainer({ children }) {
  return (
    <React.Fragment>
      <CssBaseline />
      <GlobalStyles styles={{ body: { backgroundColor: '#f0f0f0' , display: 'flex', justifyContent: 'center', alignItems: 'center' } }} />
      <Container maxWidth="sm">
        <Box sx={{  bgcolor: '#ffffffff', Height: '80vh', borderRadius: '8px', boxShadow: 3, my:1}}>
          {children}
        </Box>
      </Container>
    </React.Fragment>
  );
}