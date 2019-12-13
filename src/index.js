import React from "react";
import ReactDOM from "react-dom";
import { Container } from "@cerebral/react";
//import "./index.css";
import ISOBlueAppComponent from "./components/App";
import app from "./app";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <Container app={app}>
    <ISOBlueAppComponent />
  </Container>,
  document.getElementById("root"),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
