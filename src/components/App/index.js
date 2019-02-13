import React from "react";
import { connect } from "@cerebral/react";
import { signal } from "cerebral/tags";

import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";

import AppBarContent from "../AppBarContent/";
import Visualization from "../Visualization/";
import DrawerContent from "../DrawerContent/index.js";
import ConnectDialog from "../ConnectDialog/index.js";

const styles = theme => ({
  root: {
    flexGrow: 1,
    height: "100vh",
    zIndex: 1,
    overflow: "hidden",
    position: "relative",
    display: "flex",
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  content: {
    flexGrow: 1,
  },
  toolbar: theme.mixins.toolbar,
});

class App extends React.Component {
  componentWillMount() {
    this.props.init({});
  }

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <AppBar position="absolute" className={classes.appBar}>
          <AppBarContent />
        </AppBar>
        <DrawerContent />
        <main className={classes.content}>
          <div className={classes.toolbar} />
          <Visualization />
        </main>
        <ConnectDialog />
      </div>
    );
  }
}

export default connect(
  {
    init: signal`init`,
  },
  withStyles(styles, { withTheme: true })(App),
);
