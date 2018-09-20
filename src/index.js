import React from 'react';
import { render } from 'react-dom';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import App from './components/App/';
import registerServiceWorker from './registerServiceWorker';

import { Container } from '@cerebral/react';
import controller from './controller';


const theme = createMuiTheme({
  pallete: {
    primary: {
      light: '#718792',
      main: '#455a64',
      dark: '#1c313a',
      contrastText: '#ffffff',
    },
    secondary: {
      light: '#896a60',
      main: '#5b3f36',
      dark: '#301810',
      contrastText: '#ffffff',
    },
  },
});


render (
  <Container controller={controller}>
    <MuiThemeProvider theme={theme}>
      <App/> 
    </MuiThemeProvider>
  </Container>,
  document.getElementById('root')
);


registerServiceWorker();
