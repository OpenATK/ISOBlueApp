import React from "react";
import { render } from "react-dom";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import App from "./components/App/";

import { Container } from "@cerebral/react";
import controller from "./controller";

const theme = createMuiTheme({
  typography: {
    useNextVariants: true,
  },
});

render(
  <Container controller={controller}>
    <MuiThemeProvider theme={theme}>
      <App />
    </MuiThemeProvider>
  </Container>,
  document.getElementById("root"),
);
