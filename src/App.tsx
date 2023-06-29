import './index.css';
import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material';
import Container from '@mui/material/Container';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';

function App() {
  const theme = createTheme();
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <AppBar>
          <Toolbar></Toolbar>
        </AppBar>
      </Container>
    </ThemeProvider>
  );
}

export default App;
