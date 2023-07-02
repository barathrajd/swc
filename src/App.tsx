import './index.css';
import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Container from '@mui/material/Container';
import AppBar from '@mui/material/AppBar';
import Typography from '@mui/material/Typography';
import Toolbar from '@mui/material/Toolbar';

function App() {
  const theme = createTheme();
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <AppBar>
          <Toolbar>
            <Typography variant="h2">Hello World</Typography>
          </Toolbar>
        </AppBar>
      </Container>
    </ThemeProvider>
  );
}

export default App;
