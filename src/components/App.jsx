import React from "react";
import { state, sequences } from "cerebral";
import { connect } from "@cerebral/react";
import { withStyles } from "@material-ui/core/styles";
import { AppBar, Typography, Modal } from "@material-ui/core";

// Components
import AppBarComponent from "./AppBar";
import DrawerComponent from "./Drawer";
import Map from "./Map";

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

class AppComponent extends React.Component {
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <AppBar position="absolute" className={classes.appBar}>
          <AppBarComponent />
        </AppBar>
        <DrawerComponent />
        <main className={classes.content}>
          <div className={classes.toolbar} />
          <Map />
        </main>
        <Modal
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
          open={this.props.modalOverlay}
        >
          <div />
        </Modal>
      </div>
    );
  }
}

const App = connect(
  { modalOverlay: state`modalOverlay` },
  withStyles(styles, { withTheme: true })(AppComponent),
);

export default App;
